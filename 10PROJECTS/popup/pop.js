const open=document.getElementById("open");
console.log(open);
const close=document.getElementById("close");
const container=document.getElementById("container");

open.addEventListener("click",()=>{
    container.classList.add("active");
});

close.addEventListener("click",()=>{
    container.classList.remove("active");
});
