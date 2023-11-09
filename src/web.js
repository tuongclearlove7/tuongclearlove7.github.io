import App from "./app.js";
import Header from "./view/header/header.js";
import Header_mobile from "./view/mobile/header.js";
import navMenu from "./view/nav/nav.js";
import navMenuMobile from "./view/mobile/nav_mobile.js"
import viewPage from "./config/config.js"
import content from "./view/pages/content.js";
import Footer from "./view/footer/footer.js";



export default App.Animation(

        async () => {
    
    
            findElement("body").appendInner(
    
                Header(),
                Header_mobile(),
            );
    
        },

    
        async ()=>{
    
            findElement("body").appendInner(
                
                navMenu(),  
                navMenuMobile(),

            );
    
        },

        async ()=>{
    
            findElement("body").appendInner(
    
    
                App.setElement('div').setInner(

                    App.setElement('video').setInner(
                                
                    ).setVideo("../../../resource/video.mp4").setStyle(
                        {
                            
                            minWidth: "100%",
                            minHeight: "100%",
                            display: "block",
                             
                        }
                    )
                ).setId("background"),
    
            );
        },
    
        async ()=>{
    
            let Page_name = localStorage.getItem("Page_name");
    
            if(Page_name == null) {
    
                Page_name = "home";
    
            }
    
            findElement("body").appendInner(
                
                App.setElement("div")
                .setId("content-body")
                .setInner(

            
                ),
                viewPage(Page_name),
                
            );
    
        },

        
        async ()=>{

            findElement("body").appendInner(
                    
                App.setElement("div").setInner(

                    App.setElement('img')

                    .setImageUrl('../../../image/tamgiac_logo.png')
                    
                    .on('click', function(){

                        window.scrollTo(
                            {
                                top: 0, 
                                behavior: 'smooth',
                            }
                        );
                    }),

                ).setClass("scroll-top")
            ); 
        },

        async ()=>{
    
            findElement("body").appendInner(
                App.setElement("hr").setStyle(
                  {
                        width: "100%",
                  }
               ),
               Footer(),
               App.addScriptFile(`${window.location.origin}/src/config/javascript1.js`),

            );
        },

        
    
    )