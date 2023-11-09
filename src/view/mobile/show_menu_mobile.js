import App from "../../app.js";

export default App.Animation(

    async ()=>{

        findElement("#header-menu-container-mobile").setStyle({

            visibility: "hidden"

        });
        findElement("#header-menu-container-mobile").useHiddenStyle();
        findElement("#header-menu-container-mobile").setStyle({

            visibility: "visible"

        });

        findElement("#header-menu-container-mobile").useShowingStyle();

        await App.wait(300);

    }

)