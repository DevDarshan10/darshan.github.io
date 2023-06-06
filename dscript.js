sounds=['sounds/tom-1.mp3','sounds/tom-2.mp3','sounds/tom-3.mp3','sounds/tom-4.mp3','sounds/snare.mp3','sounds/crash.mp3','sounds/kick-bass.mp3'];

for(let i=0;i<document.querySelectorAll('.drum').length;i++){
      document.querySelectorAll('.drum')[i].addEventListener('click',function(){
           new Audio(sounds[i]).play();
           document.querySelectorAll('.drum')[i].classList.add('animation');
           setTimeout(function(){
              document.querySelectorAll('.drum')[i].classList.remove('animation')
           },100);
      })
}

document.addEventListener('keydown',function(e){
    makeSound(e.key);
    keyAnimation(e.key);
})

function makeSound(key){
      switch(key){
            case 'w': new Audio(sounds[0]).play(); break;
            case 'a': new Audio(sounds[1]).play(); break;
            case 's': new Audio(sounds[2]).play(); break;
            case 'd': new Audio(sounds[3]).play(); break;
            case 'j': new Audio(sounds[4]).play(); break;
            case 'k': new Audio(sounds[5]).play(); break;
            case 'l': new Audio(sounds[6]).play(); break;
          }
}

function keyAnimation(key){
      document.querySelector('.'+key).classList.add('animation');
      setTimeout(function(){
             document.querySelector('.'+key).classList.remove('animation')
      },100);
}

