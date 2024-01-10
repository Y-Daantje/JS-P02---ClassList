const div = document.querySelector(".box");
const btn = document.querySelector(".run");

let toggle = true;
btn.addEventListener("click", function () {
    if (toggle) {
        div.classList.add("error");
    } else {
        div.classList.remove("error");
    }
    toggle = !toggle;
});





//opdr3
//  toggle = true;
// btn.addEventListener("click", function () {
//     if (toggle) {
//         div.classList.add("error");
//     } else {
//         div.classList.remove("error");
//     }
//     toggle = !toggle        ;
// });

//opdr1/2
// const changeBtn = document.querySelector(".change");

// btn.addEventListener("click", function () {
//     div.classList.add("error")
// });
// changeBtn.addEventListener("click", function () {
//     div.classList.remove("error");
// })

function saySomthing(params) {
    document.body.innerHTML += '<h2>' + params + '</h2>'
}
saySomthing('Hello World');