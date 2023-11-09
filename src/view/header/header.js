import App from "../../app.js";

export default function Header(){

        return(
                
                App.setElement('div').setInner(

                        App.setElement('div').setInner(
                
                                App.setElement('img').setStyle(
                                {
                                        padding:"15px",
                                        width:"70px",
                                        float:"left",
                                        borderRadius:'50%'
                                }
                        )
                        .setImageUrl("../../../image/rose.jpg")
                        
                        ).setClass("logo"),
                
                
                        App.setElement('div').setInner(
                
                                App.setElement("h2").setInner("Rose9")
                                .setId('rose')
                                .on("click", function(){
                                
                                        App.setKeyValue('home');
                                        window.location.reload();
                                
                                })
                
                        ).setClass("text-header")
                
                        .setStyle(
                                {
                                    color:"white",
                                    float:"left",
                                    paddingTop :"35px",
                                }
                        ),
                
                
                ).setStyle(
                
                        { 
                           float:"left",
                           width: "100%",
                           height:"100px",
                        //    position: "fixed",
                           backgroundColor:"rgb(30, 30, 29)"
                        }
                )
                .setId("header")
        
        
               
        
        )
}

