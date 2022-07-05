const btn=document.getElementById('btn');
const container=document.getElementById('container');
btn.addEventListener('click',()=>{
    notification();
});

function notification(){
    const noti=document.createElement('div');
    noti.classList.add('notify');

    noti.innerText='Better luck next time';
container.appendChild(noti);

setTimeout(()=>{
noti.remove();
},3000);
}