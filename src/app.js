import setElement from "./element.js"
import Animation from "./animation.js"
import addScriptFile from "./config/script.js";
import framework from "./framework.js";
const KEY = 'Page_name';

class App {

        setElement = setElement;
        Animation = Animation;
        addScriptFile = addScriptFile;

        setKeyValue = function(value){

                localStorage.setItem(KEY, value);
                document.cookie = `${KEY}=${value}`;
        }

        init = function(){
    
                setElement("body");
        
        }

        getTagName = function(tagName) {
                let res = document.querySelector(tagName);
                return res;
        }

        setStyleByTagName = (tagName, styleConfig) => {
                try {
                        for (let configName in styleConfig) {
                                this.getTagName(tagName).style[configName] = styleConfig[configName];
                            }
                        return styleConfig;
                }catch{
                        console.log("Set style error");
                }
              
        }

        addStyle = (url) =>{
    
                return document.body.appendInner(        
                    this.setElement("link")
                    .setAttribute("rel", "stylesheet")
                    .setAttribute("href", url)
                );
        }
    
        setKeyValue(value){

                localStorage.setItem(KEY, value);
                document.cookie = `${KEY}=${value}`;
        }
        
        endUserText(inputText) {
                let words = inputText.split("_");
                let formattedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
                let formattedText = formattedWords.join(" ");
                return formattedText;
        }
        
        wait = async function(seconds){

                return await new Promise((resolve)=>{
                                setTimeout(() => {
                                resolve()
                        }, seconds);
                });
        }


        
}

window.App = App;
window.findElement = (selector)=>{
        
        return framework.queryElement(selector);
}
export default new App;



























