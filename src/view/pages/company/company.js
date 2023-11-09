import App from "../../../app.js";

App.getTagName('title').textContent = 'Company - Trần Thế Tường';

export default function Company(){
        
    return (

        App.setElement('div').setInner(

            App.setElement('main').setInner(
    
                App.setElement('div').setInner(
                                    
                    App.setElement('h2')

                    .setInnerBOT('Company information'.toUpperCase())

                    .on("click", ()=>{
                        window.location.href="/";
                    }),
                
                    App.setElement('p')

                    .setInner(`Kindly hold on, the API is currently being called back!`
                    
                    ).setClass('apply-company'),

                ).setClass("container-company"),
            )
        ).setClass("content-container")
    );
}
    
    
    
findElement("#content-body").appendInner(

    Company()

);