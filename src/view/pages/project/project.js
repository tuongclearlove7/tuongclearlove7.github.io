import App from "../../../app.js";

App.getTagName('title').textContent = 'Project - Trần Thế Tường';

export default function Project(){

        
        return (
    
            App.setElement('div').setInner(

                App.setElement('main').setInner(
        
                      
                )
            ).setClass("content-container")
        );
    
}
    
    
    
findElement("#content-body").appendInner(

        Project()

);