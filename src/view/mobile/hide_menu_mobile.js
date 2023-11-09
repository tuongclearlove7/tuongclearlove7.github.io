import App from "../../app.js";

export default App.Animation(

    async ()=>{

        findElement("#header-menu-container-mobile").useShowingStyle();

        findElement("#header-menu-container-mobile").setStyle({

            visibility: "visible"

        });
        findElement("#header-menu-container-mobile").useHiddenStyle();

        await App.wait(300);
        findElement("#header-menu-container-mobile").setStyle({

            visibility: "hidden"

        });

    }

)