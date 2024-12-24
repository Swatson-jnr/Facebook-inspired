var settingsmenu = document.querySelector(".setting-menu");
let profile =document.querySelector(".there")
let DarkBtn = document.getElementById("dark-btn")
let btn = document.querySelector(".btn")

// profile.addEventListener("click", book () {
//     settingsmenu.classList.toggle(".setting-menu-height");
// })


// function settingsMenuToggle(){
//     settingsmenu.classList.toggle(".setting-menu-height");
// }

profile.addEventListener("click", function(){
    let settingmenu = document.querySelector(".setting-menu");
    settingmenu.classList.toggle("setting-menu-height")

})

DarkBtn.addEventListener("click", function(){
    DarkBtn.classList.toggle("dark-btn-on")
    document.body.classList.toggle("dark-theme")
    btn.classList.toggle("btn-small")
} )