import framework from "../framework.js";
import setElement from "../element.js";
import App from "../app.js";



export default function addScriptFile(src) {

    return (
        App.setElement("script")
        .setAttribute("type", "module")
        .setAttribute("src", src)
    ); 
}