import framework from "../framework.js";
import setElement from "../element.js";
import App from "../app.js";
const rose = document.getElementById('rose');
let lastPrice = 0;

async function UpDown(){

        let Coin;
        while (true) {
            const price = 2023 + Math.random() * 400;
            Coin ={ price : parseFloat(price.toFixed(2))};
            await new Promise(resolve => setTimeout(resolve, 50));

                if(Coin.price > lastPrice){
                        try {
                                rose.className = 'up';
                                lastPrice = Coin.price;
                                document.getElementById('rose').innerHTML = `rose9`.toUpperCase();
                        } catch (error) {
                                return;
                        }
                
                        }else{
                        rose.className = 'down';
                        lastPrice = Coin.price;
                        document.getElementById('rose').innerHTML = `rose9`.toUpperCase();
                }

        }

}

UpDown();



async function companyAPI() {


        let data = await fetch(`https://web-chat.up.railway.app/company-api`)
        .then(res => {
                
                return res.json();

        }).catch(function (error) {

                console.log("error");
        });
        

        try{
                let element = document.querySelector(".apply-company");
                let companyNames = "";

                for (let i = 0; i < data.length; i++) {
                companyNames += `        
                <tr>
                <td>${data[i].ten_cong_ty}</td>
                <td>${data[i].linh_vuc}</td>
                <td>${data[i].sdt}</td>
                <td>${data[i].email}</td>
                <td>${data[i].dia_chi}</td>
                <td>${data[i].vi_tri_tuyendung}</td>
                <td>${data[i].luong}</td>
                </tr>`;
                }

                return element.innerHTML = `
                <div class=".table-responsive">
                <table>
                <tr>
                <th>Tên công ty</th>
                <th>Lĩnh vực</th>
                <th>Số điện thoại</th>
                <th>Email</th>
                <th>Địa chỉ</th>
                <th>Vị trí tuyển dụng</th>
                <th>Lương</th>
                </tr>${companyNames}
                </table>
                </div>
        `;

        }catch{

                console.warn("không tìm thấy tên của class!!!");
        }

        

}


companyAPI();


window.addEventListener("scroll", function () {

        var scroll = window.pageYOffset;

        if (scroll > 300) {
                App.setStyleByTagName('.scroll-top', {
                        transition: 'transform 3s',
                        display: 'block',
                });

        }
        else {
                App.setStyleByTagName('.scroll-top', {
                        transition: 'transform 3s',
                        display: 'none',
                });
        }

     


})




































