//get data from local storage , if not we will to get from JSON
//display message when they want to remove extension
// and save changes to local storage
// select there theme color and save to local storage
const extensionContainer = document.querySelector(".extensions-container");
const bodyElement = document.querySelector("body");
const logoSection = document.querySelector(".logo-section");
const extensionListHeading = document.querySelector(".extension-list-heading");
const extensionFilterBtn = document.querySelectorAll(".extension-btn");
// hadling theme swithcer 
const themeImage =document.querySelector(".theme-image");
 const systemSettingDark =  window.matchMedia("(prefers-color-scheme:dark)")

const systemSettingLight = window.matchMedia("(prefers-color-scheme:light)");

const themeSwithcerBtn = document.querySelector("[data-theme-toggle]");

window.addEventListener("DOMContentLoaded",()=>{

const localStorageTheme = localStorage.getItem("theme")
const currentTheme = calulateSettingAsThemeSting(localStorageTheme,systemSettingDark)

const newCta = currentTheme==="dark"?"change to light theme":"change to dark theme";
themeSwithcerBtn.setAttribute("aria-label",newCta)
document.querySelector("html").setAttribute("data-theme",currentTheme)
themeImage.src= currentTheme === "dark"?"assets/images/icon-sun.svg":"assets/images/icon-moon.svg"

})

const calulateSettingAsThemeSting = (localStoragetheme,systemSetting)=>{

if(localStoragetheme!==null){
    return localStoragetheme;
}
if(systemSetting.matches){
    return "dark";
}
    return "light";

}


themeSwithcerBtn.addEventListener("click",()=>{
    
console.log(systemSettingDark)
const localStorageTheme = localStorage.getItem("theme")
let currentThemeSetting = calulateSettingAsThemeSting(localStorageTheme,systemSettingDark)
const newtheme = currentThemeSetting === "dark"?"light":"dark";
const newCta = newtheme==="dark"?"change to light theme":"change to dark theme";
themeSwithcerBtn.setAttribute("aria-label",newCta)
document.querySelector("html").setAttribute("data-theme",newtheme)
themeImage.src= newtheme === "dark"?"assets/images/icon-sun.svg":"assets/images/icon-moon.svg"
localStorage.setItem("theme",newtheme)

})


const getExtesnionsFromJSON = async function(){
    try{
const response = await fetch("data.json");
const extensionData= await response.json();
populatePage( extensionContainer,extensionData)
localStorage.setItem("extensions",JSON.stringify(extensionData))
console.log(extensionData)
    }
catch(error){
console.log(error)

    }


}

const populatePage = (page,data)=>
{

page.innerHTML=""
data.forEach(({logo,name,description,isActive})=>{
page.innerHTML+=`
 <div class="extension" id="${name}">
    <div class="image-text-container">
      <img src="${logo}" class="logo-image" aria-hidden="true" loading="lazy"/>
 <div class="extesnions-heading-and-text">
<h3 class="extensions-heading">${name}</h3>
  <P class="extension-text">${description}</P>
  </div>
  </div>
  <div class="btn-and-input-container">
 <button class="remove-btn">Remove</button>
 <button class="on-and-of-extension-btn ${isActive}" aria-label="remove this extension">

<span class="toggle-background"></span>
 </button>
 </div>
</div>


`

})


}

const retriveExtensionsFromLocalStorage = ()=>{
const extensions = localStorage.getItem("extensions");
if(extensions!==null){
return JSON.parse(extensions)
}
return undefined

}

const filterEextensions  = (extensionType,array)=>{

if(extensionType==="inactive"){
return array.filter(e=>e.isActive===false)
}
else if(extensionType==="active"){
return array.filter(e=>e.isActive===true)
}
else{

    return array
}
}


const renderToHtml = (type)=>{

const extensions = retriveExtensionsFromLocalStorage();

if(extensions !== undefined){
 const filtered = filterEextensions(type,extensions)
   populatePage( extensionContainer,filtered)
   return
}

else{

getExtesnionsFromJSON()


}
} 
renderToHtml()


//filter 


//remove 
const removeExtension = (id)=>{
const extensions = retriveExtensionsFromLocalStorage();

const name = extensions.findIndex(e=>e.name===id);
extensions.splice(name,1);
localStorage.setItem("extensions",JSON.stringify(extensions))
const element = document.getElementById(id);

element.remove()
}

extensionContainer.addEventListener("click",e=>{

if(e.target.className==="remove-btn"){
console.log(e.target.parentElement.parentElement)
removeExtension(e.target.parentElement.parentElement.id)

}
if(e.target.classList.contains("on-and-of-extension-btn")){
const extensions = retriveExtensionsFromLocalStorage();
const id = e.target.parentElement.parentElement.id;

const indexOfModied = extensions.findIndex(e=>e.name===id)
 const current =   [...extensionFilterBtn].filter(e=>e.classList.contains("current-btn"))[0].id;
 
if(e.target.classList.contains("true")){

e.target.classList.remove("true")
e.target.classList.add("false")
setTimeout(()=>{
extensions[indexOfModied].isActive = false;
localStorage.setItem("extensions",JSON.stringify(extensions))
 
  renderToHtml(current)
},600)

}
else{
e.target.classList.remove("false")
e.target.classList.add("true") 
setTimeout(()=>{
extensions[indexOfModied].isActive = true;
localStorage.setItem("extensions",JSON.stringify(extensions))
renderToHtml(current)

},600)

}
}

})

extensionFilterBtn.forEach(btn=>{
    btn.addEventListener("click",(e)=>{

renderToHtml(btn.id)

extensionFilterBtn.forEach(e=>{
  e.classList.remove("current-btn")
})
btn.classList.add("current-btn")

    })
})









