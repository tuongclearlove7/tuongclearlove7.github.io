import setElement from "./element.js"
import Animation from "./animation.js"
import viewEngine from "./config/script.js";
const KEY = 'Page_name';

const framework = {


        setElement, 
        Animation,
        viewEngine,
        init(){
    
            setElement("body");
    
        },


        queryElement: function(tagName) {
            let res = document.querySelector(tagName);
            return res;
        },
        
        setStyleByTagName: (tagName, styleConfig) => {
            for (let configName in styleConfig) {
                framework.queryElement(tagName).style[configName] = styleConfig[configName];
            }
            return styleConfig;
        },
    
        addStyle(url){
    
            document.body.appendInner(        
                framework.setElement("link")
                .setAttribute("rel", "stylesheet")
                .setAttribute(
                    "href", 
                    url
                )
            )
    
        },

        setKeyValue(value){

            localStorage.setItem(KEY, value);
            document.cookie = `${KEY}=${value}`;
        },
    
        endUserText(inputText) {
            let words = inputText.split("_");
            let formattedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
            let formattedText = formattedWords.join(" ");
            return formattedText;
        },
    
        wait : async function(seconds){
    
            return await new Promise((resolve)=>{
    
                setTimeout(() => {
                    resolve()
                }, seconds);
    
            });
    
        }
    
    }
    

export default framework;