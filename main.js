const pMBnt = document.getElementById("push-me-btn");

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