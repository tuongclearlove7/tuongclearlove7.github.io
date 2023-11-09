import framework from "../framework.js"
import setElement from "../element.js";
import App from "../app.js";



export default function configView(pageName){

    //return App.addScriptFile(`${window.location.origin}/src/view/pages/${pageName}/${pageName}.js`);
    return (App.setElement("script").setAttribute("type", "module")
        .setAttribute("src", `${window.location.origin}/src/view/pages/${pageName}/${pageName}.js`)
    );
}