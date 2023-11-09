import framework from "./framework.js"


function setStyleContainer(elementName,styleConfig){
    for(let configName in styleConfig){
        elementName.style[configName] = styleConfig[configName];
    } 

    return elementName;
};

setStyleContainer('body',{
    
});

let count = 0;


export default function setElement(elementName) {
        
        ++count;
       // console.log(count);
        let result;

        if(elementName == "body") result = findElement('body');
        else result = document.createElement(elementName);
    
        result.setClass = function(name){
    
            result.classList.add(...name.split(' '));
    
            return result;
        }
    
        result.setId = function(id){
    
            result.id = id;
    
            return result;
        }

     


        result.setData = (value1, value2, duration = 1000, easing = "ease-in-out", once = true, mirror = false) => {
            result.setAttribute("data-aos", value1);
            result.setAttribute("data-aos-duration", value2);
            result.setAttribute("data-aos-easing", easing);
            result.setAttribute("data-aos-once", once);
            result.setAttribute("data-aos-mirror", mirror);
        
            return result;
        }


        result.setMarquee = function(){
    
                result.direction = 'right';
                result.scrollAmount = "15";
                //result.behavior = 'alternate';
                return result;
        }


        result.setVideo = function(url){
    
                result.src = url;
                result.controls = false;
                result.autoplay = true;
                result.muted = true; 
                result.addEventListener('loadeddata', function() {
                    result.play(); 
                });
                return result;
        }

        result.setImageUrl = function(url){
    
                result.src = url;
                result.alt = url;
        
                return result;
        }
    
        result.setStyle = function(styleConfig){
    
            for(let configName in styleConfig){
    
                result.style[configName] = styleConfig[configName];
    
            } 
    
            return result;
        };
    
        result.on = function(name, callback){
    
            result.addEventListener(name, callback);
    
            return result;
        };
    
        result.exe = function(callback){
    
            callback.bind(result)();
    
            return result;
        };
    
        const defaultSetAttribute = HTMLElement.prototype.setAttribute;
        
        result.setAttribute = function(name, value){
    
            defaultSetAttribute.bind(result)(name, value);
    
            return result;
        }
    
        result.appendInner = function(...childs){
            
            for(let childName in childs){
    
                let child = childs[childName];
    
                try {
    
                    result.appendChild(child);
    
                }
                catch
                {
    
                    try{
    
                        result.innerHTML += child;
    
                    }
                    catch{
    
    
    
                    }
    
                }
    
            }
    
            return result;
        }
        
        let i = 0;

        result.setInnerBOT = function(...childs) {

                let message = childs[0];

               // speakText(message);

                function renderText() {

                    if (i < message.length) {

                        result.textContent += message[i];

                        setTimeout(renderText, 50);
                        
                        i++;
                    }
                }
              
                renderText();
              
                return result;
        };

        
              
        function speakText(text) {

            console.log(text);

            document.addEventListener('click', () => {

                responsiveVoice.speak(text, "Australian Female");
                
            }, { once: true });
        }
    
        result.setInner = function(...childs){
    
            return result.setInnerArray(childs);
        }
    
        result.setInnerArray = function(childsArray){
    
            result.innerHTML = "";
            
            for(let childName in childsArray){
    
                let child = childsArray[childName];
    
                try {
    
                    result.appendChild(child);
    
                }
                catch
                {
    
                    try{
    
                        result.innerHTML += child;
    
                    }
                    catch{
    

                    }
    
                }
    
            }
    
            return result;
        }
    
        return result;
};













