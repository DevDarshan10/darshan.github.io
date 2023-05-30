var a= ['animals/dog.png','animals/cheetah.png','animals/lion.png','animals/tiger.png','animals/rhinoceros.png','animals/cow.png','animals/deer.png','animals/toucan (1).png','animals/elephant.png'];
console.log(a.length)
function refresh(){
   document.querySelector('img').setAttribute('src',a[Math.floor(Math.random()*9)]);
}