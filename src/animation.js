export default function Animation(...states) {

    return async function() {

        for(let state of states){

            await state();

        }

    };

}