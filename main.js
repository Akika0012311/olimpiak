const pMBnt = document.getElementById("push-me-btn");
const sideMenuBtn = document.getElementById("menu-btn");
const sideMenuBtn2 = document.getElementById("menu-btn2");
const sideMenu = document.getElementById("side-menu-div");

pMBnt.addEventListener("click", function() {
    PushMeBntOnClick();

    setTimeout(300, PushMeBntSetBack);
})

function PushMeBntOnClick() {
    pMBnt.style.border = "3px solid rgb(202, 202, 202)";
}

function PushMeBntSetBack() {
    pMBnt.style.border = "3px solid rgb(161, 161, 161)";
}




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