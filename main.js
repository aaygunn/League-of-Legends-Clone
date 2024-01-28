/* const suikastUrl= "https://www.leagueoflegends.com/static/assassin-a648ef647c30c9411666320760cf348b.png";

const dovuscuUrl="https://www.leagueoflegends.com/static/fighter-a4437cd565f0ef83367b671e5d07fe5c.png";

const buyucuUrl="https://www.leagueoflegends.com/static/mage-3982e64e8ed1cd4dceec59ad308a161d.png";

const nisanciUrl="https://www.leagueoflegends.com/static/marksman-479be0ed78d734df0bbf0dee3d6a512b.png";

const destekUrl="https://www.leagueoflegends.com/static/support-67a9e712458a12bbb8282bda5333a0ba.png";

const tankUrl="https://www.leagueoflegends.com/static/tank-585e210d26783e11b97d62eafa248ff4.png"


let role= document.addEventListener("click", tiklananRol);
 
function tiklananRol(e){
    
}

// function tiklananRol(){
//     let sec= document.querySelector("#tresh");
//     tresh.setAttribute("src", "https://www.leagueoflegends.com/static/mage-3982e64e8ed1cd4dceec59ad308a161d.png")
    
// } */

let role= document.querySelector(".hero_roles-img");


let tiklanan= role.addEventListener("click", tiklananRol);
 
function tiklananRol(){
    console.log(role)
}