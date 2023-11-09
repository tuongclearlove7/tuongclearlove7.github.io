import App from "../../../app.js";

App.getTagName('title').textContent = 'About - Trần Thế Tường';

export default function About(){

        let text = '';
        text.toUpperCase();
        
        return (
    
                App.setElement('div').setInner(

                    App.setElement('main').setInner(


                    )
            ).setClass("content-container")
        );
    
}
    
    
findElement("#content-body").appendInner(

    About()

);