import App from "../../app.js";
import show_nav_menu_mobile from "./show_menu_mobile.js";
import hide_nav_menu_mobile from "./hide_menu_mobile.js";


export default function navMenuMobile(){
    
    return (
        
        App.setElement("div")
        .setId("header-menu-container-mobile")
        .setStyle({

            visibility: "hidden",
            height: "0px",

        })
        .setInner(

            App.setElement("div")
            .setClass("header-menu-button-mobile")
            .setInner(

                "Home"

            )
            .on("click", function(){

                App.setKeyValue('home');
                (async()=>{
                    await App.wait(300);
                    window.location.reload();
                })()

            }),

            App.setElement("div")
            .setClass("header-menu-button-space-mobile")
            .setInner(

                

            ),

            App.setElement("div")
            .setClass("header-menu-button-mobile")
            .setInner(

                "Knowledge"

            )
            .on("click", function(){

                App.setKeyValue('knowledge');
                (async()=>{
                    await App.wait(300);
                    window.location.reload();
                })()

            }),

            App.setElement("div")
            .setClass("header-menu-button-space-mobile")
            .setInner(

                

            ),

            App.setElement("div")
            .setClass("header-menu-button-mobile")
            .setInner(

                "Project"

            )
            .on("click", function(){

                App.setKeyValue('project');
                (async()=>{
                    await App.wait(300);
                    window.location.reload();
                })()

            }),

            App.setElement("div")
            .setClass("header-menu-button-mobile")
            .setInner(

                "Company"

            )
            .on("click", function(){

                App.setKeyValue('company');
                (async()=>{
                    await App.wait(300);
                    window.location.reload();
                })()

            }),

            App.setElement("div")
            .setClass("header-menu-button-space-mobile")
            .setInner(),

            App.setElement("div")
            .setClass("header-menu-button-mobile")
            .setInner(
                'About'

            ).on("click", function(){

                App.setKeyValue('about');

                (async()=>{
                    await App.wait(300);
                    window.location.reload();
                })()

            }),

            App.setElement("div")
            .setClass("header-menu-button-space-mobile")
            .setInner(

                

            ),

            App.setElement("div")
            .setClass("header-menu-button-mobile")
            .setInner(

                "Skill"

            )
            .on("click", function(){

                App.setKeyValue('skill');

                (async()=>{
                    await App.wait(300);
                    window.location.reload();
                })()

            }),

            App.setElement("div")
            .setClass("header-menu-button-space-mobile")
            .setInner(),
            
        )
        .exe(function(){

            this.state = "hidden";

            let nav_menu_mobile = this;
            nav_menu_mobile.isTouchMove = false;

            window.addEventListener("touchstart", function(){

                nav_menu_mobile.isTouchMove = false;

            });

            window.addEventListener("touchmove", function(){

                nav_menu_mobile.isTouchMove = true;
            });

            function checkVisible(elm) {
                var rect = elm.getBoundingClientRect();
                var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
                return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
            }

            window.addEventListener("touchend", function(){

                if(
                    nav_menu_mobile.state != "hidden"
                    && nav_menu_mobile.isTouchMove
                    && !checkVisible(nav_menu_mobile)
                )
                    nav_menu_mobile.hide();

            });

            this.changeState = async function(){

                if(nav_menu_mobile.state == "hidden"){

                    window.scrollTo(
                        {
                                top: 0, 
                                left: 0, 
                                behavior: "smooth"
                        }
                    );

                    await nav_menu_mobile.show();

                }
                else{

                    await nav_menu_mobile.hide();

                }

            }

            this.useShowingStyle = function(){

                this.setStyle({

                    height: "270px",
                    background:'rgba(0, 0, 0, 0.247)',
                    marginTop: "7x",
                    marginBottom: "7px",
                    filter: "opacity(1.0)",

                });

                findElement("#header-menu-mobile")
                .setStyle({

                    transform: "rotate(180deg)",
                    filter: "grayscale(1.0)",

                });

            }

            this.useHiddenStyle = function(){

                this.setStyle({

                    height: "0px",
                    marginTop: "0px",
                    marginBottom: "0px",
                    filter: "opacity(0.0)",
                    
                });

                findElement("#header-menu-mobile")
                .setStyle({

                    transform: "rotate(0deg)",
                    filter: "grayscale(0.0)",

                });
                
            }

            this.show = async function(){

                nav_menu_mobile.state = "";
                
                await show_nav_menu_mobile();

            }

            this.hide = async function(){

                nav_menu_mobile.state = "hidden";

                await hide_nav_menu_mobile();

            }

            window.addEventListener("resize", function(){

                if(this.window.innerWidth >= 725){

                    nav_menu_mobile.hide();

                }

            });

        })

    )
}