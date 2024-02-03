const hh = document.getElementById("here");

function clickFunction() {
    if(hh.className !== "active"){
        hh.className = "active";
    }
    else{
        hh.className = "";
    }
}

hh.addEventListener("click", clickFunction);
// 아이고 active에 따옴표 안 쓰셨네요.
// 아이고 document.가 빠졌네.
// 아이고 ; 졸라 빠졌네.
// 아이고 title 부르고 h1.class라고 하셨네요.
// 설마 className이 아니라, class 여서..?
// 설마.. title이라서 안되나? 내장된 것이라서?

//와 Elements에 s가 붙어서 그런거였어.
//else 에 조건 없으면 괄호 없이 그냥 쓰면 되네.
