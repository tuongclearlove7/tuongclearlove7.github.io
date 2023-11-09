import App from "../../app.js";

export default function Footer(){

        return(
                App.setElement('footer').setInner(
                    App.setElement('h3').setInner("© 2023 By Clearlove7, Inc.").setStyle(
                            {
                                color : "white",
                                padding:'20px',
                                height:"100%",
                                fontFamily:"math",
                                fontStyle:"italic",
                            }
                    )).setClass("footer-content").setStyle(
                            {
                                clean : "both",
                                float: 'left',
                                width: "100%",
                                height:'100%',
                                bottom:'0',
                                background:'rgba(0, 0, 0, 0.247)',
                            }
                    )
        );
        
}