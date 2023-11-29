function toggleMode(){
 const html = document.documentElement
//forma mais complexa 
 // if(html.classList.contains('light')){
 // html.classList.remove('light') 
//else{
//  html.classList.add('light')
// } 
//forma mais simplificada
html.classList.toggle('light')

const img = document.querySelector("#profile img")

if (html.classList.contains("light")){
 img.setAttribute("src","./assets/avatar-light.png")
}
else {
  img.setAttribute("src","./assets/avatar.png")
}



}

 
