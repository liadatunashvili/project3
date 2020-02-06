//  let button = document.getElementById('button');
// let buttonmenui = document.querySelector('.buttonmenu');

// // document.getElementsByClassName
// // document.getElementsByTagName


// // testBtn.addEventListener('click', function(){
// //     console.log('gamarjoba');
// // })

//  button.addEventListener('click', function(){
//     buttonmenui.classList.toggle('ak');
//  });
// testBtn.innerText = "abg";

// testBtn.style.color = "yellow";
// function someFunct(){
//     console.log(testBtn);

// // }
// let lol = document.getElementById('demo');
// lol.innerText = 'hello';

// let lil = document.querySelectorAll('.test');
// lil[0].innerText = 'ld;lsfg';
// console.log(lil[0]);
// lil[1].innerText = 'dffh'
// lil[1].style.backgroundColor = 'red';
let off = document.querySelector('.off');
let btn1 = document.querySelector('.light');
let btn2 = document.querySelector('.dark');


 btn1.addEventListener('click', function(){
    off.src = 'assets/style/download.png'
 });
 btn2.addEventListener('click', function(){
   off.src = 'assets/style/download.jpg'
});