const sideMenuBtn = document.getElementById("menu-btn");
const sideMenuBtn2 = document.getElementById("menu-btn2");
const sideMenu = document.getElementById("side-menu-div");


sideMenuBtn.addEventListener("click", function() {
    OnClickSideMenuBtn();
})

function OnClickSideMenuBtn() {
    sideMenu.style.transform = "translateX(-100%)";
}


sideMenuBtn2.addEventListener("click", function() {
    OnClickSideMenuBtn2();
})

function OnClickSideMenuBtn2() {
    sideMenu.style.transform = "translateX(0%)";
}