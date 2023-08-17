var i=1;
setInterval(function(){
   document.querySelector('.poster img').setAttribute('src','assets/poster'+i+'.webp');
   if(i>=4)
      i=1;
    else
      i++;
},2000)

document.querySelector('.hamburger').addEventListener('click',function(){
    document.querySelector('ul').classList.toggle('menu');
})

document.querySelector('nav ul li:first-child').addEventListener('click',function(){
   location.reload();
})