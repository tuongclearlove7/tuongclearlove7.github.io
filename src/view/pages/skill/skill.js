import App from "../../../app.js";

App.getTagName('title').textContent = 'Skill - Trần Thế Tường';

export default function Skill(){

        return (
    
            App.setElement('div').setInner(

                App.setElement('main').setInner(
        
                      
                )
            ).setClass("content-container")
        );
    
}

    
findElement("#content-body").appendInner(

        Skill()

);