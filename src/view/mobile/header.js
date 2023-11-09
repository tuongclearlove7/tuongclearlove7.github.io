import App from "../../app.js";

export default function Header_mobile(){


    return (
        App.setElement("div")
        .setId("header-mobile")
        .setInner(

            App.setElement("div")
            .setId("header-logo"),

            App.setElement("div")
            .setInner(

                App.setElement("div")
                .setStyle({

                    zIndex: "10"

                })
                .setInner(
    
                    "Clearlove7"
    
                ).on("click",function(){
                    document.location.reload();
                }),

                App.setElement("div")
                .setInner(

                    App.setElement("div")
                    .setId("header-menu-mobile")
                    .setStyle({
                        
                        transform: "rotate(0deg)"

                    })
                    .setInner(



                    )
                    .on("click", function(){

                        findElement("#header-menu-container-mobile").changeState();

                    }),

                ),

            ),

        )
    );
}