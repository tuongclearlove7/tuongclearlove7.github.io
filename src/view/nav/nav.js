import App from "../../app.js";

export default function navMenu(){


        return (

                App.setElement('div').setInner(

                        App.setElement("ul").setInner(
                                
                                App.setElement("li").setInner(
                                        App.setElement("a")
                                        .setInner("HOME").on("click", function(){
                                                
                                                App.setKeyValue('home');
                                                window.location.reload();
                                                
                                        }).setStyle({
                                                // color:"black",
                                        })
                                        ,
                                        
                                        ).setStyle(
                                        { 
                                                listStyle:"none",
                                                float:"left",
                                        }
                                ).setClass("link"),
                
                                App.setElement("li").setInner(
                                        App.setElement("a")
                                        .setInner("ABOUT").on("click", function(){
                
                                                App.setKeyValue('about');
                                                window.location.reload();
                
                                                
                                               
                
                                        }).setStyle({
                                                // color:"black",
                                        })
                                        ,
                                        
                                ).setStyle(
                                        { 
                                                listStyle:"none",
                                                float:"left",
                                        }
                                ).setClass("link"),
                
                                App.setElement("li").setInner(
                                        App.setElement("a")
                                        .setInner("KNOWLEDGE").on("click", function(){

                                                console.log({message:'knowledge page'});
                                                App.setKeyValue('knowledge');
                                                window.location.reload();
                                                
                                        }).setStyle({
                                                // color:"black",
                                        })
                                        ,
                                        
                                        ).setStyle(
                                        { 
                                                listStyle:"none",
                                                float:"left",
                                        }
                                ).setClass("link"),
                
                                App.setElement("li").setInner(
                                        App.setElement("a")
                                        .setInner("SKILL").on("click", function(){
                
                                                App.setKeyValue('skill');
                                                window.location.reload();
                                                
                                        }).setStyle({
                                                // color:"black",
                                        })
                                        ,
                                        
                                        ).setStyle(
                                        { 
                                                listStyle:"none",
                                                float:"left",
                                        }
                                ).setClass("link"),
                
                                App.setElement("li").setInner(
                                        App.setElement("a")
                                        .setInner("PROJECT").on("click", function(){

                                                App.setKeyValue('project');
                                                window.location.reload();
                                                
                                        }).setStyle({
                                                // color:"black",
                                        })
                                        ,
                                        
                                        ).setStyle(
                                        { 
                                                listStyle:"none",
                                                float:"left",
                                        }
                                ).setClass("link"),

                                
                                App.setElement("li").setInner(
                                        App.setElement("a")
                                        .setInner("COMPANY").on("click", function(){

                                                App.setKeyValue('company');
                                                window.location.reload();
                                                
                                        }).setStyle({
                                                // color:"black",
                                        })
                                        ,
                                        
                                        ).setStyle(
                                        { 
                                                listStyle:"none",
                                                float:"left",
                                        }
                                ).setClass("link"),
                
                        ).setStyle({
                                height:"70px",
                        })
                        
                
                
                ).setClass("nav-menu").setStyle({
                      
                        
                })
        );

        
}