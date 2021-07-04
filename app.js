let header = document.querySelector("header");
//console.log(header);
 
//在這裡用步道E,有沒有沒差,主要是要知道滾輪的值
window.addEventListener("scroll", e=>{
    console.log(window.pageYOffset);
})  

let headerAnchor= document.querySelectorAll("header nav ul li a");
//console.log(headerAnchor);

window.addEventListener("scroll", ()=>{
    if(window.pageYOffset !=0){
        header.style.backgroundColor = "#FFD306";
        header.style.color="#EA0000"; //陰影變色

        //滾輪滑動 字體變橘色
       headerAnchor.forEach(a =>{
            a.style.color ="#EA0000";
        }) 
    }
    else{
        header.style="";
        headerAnchor.forEach(a =>{
            a.style.color ="darkcyan";
        })
    }
})   

