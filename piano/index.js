var len= document.querySelectorAll('.container>div').length;
var keys=['keys/key01.mp3','keys/key15.mp3','keys/key16.mp3','keys/key17.mp3','keys/key20.mp3','keys/key22.mp3']
for(let i=0;i<len;i++){
    document.querySelectorAll('.container>div')[i].addEventListener('click',function(){
        document.querySelectorAll('.container>div')[i].classList.add('a');
        new Audio(keys[i]).play();
        setTimeout(function(){
            document.querySelectorAll('.container>div')[i].classList.remove('a');
        },100)
    })
}

document.addEventListener('keydown',function(e){
      switch(e.key){
        case 'a': new Audio(keys[0]).play(); 
                  document.querySelectorAll('.container>div')[0].classList.add('a');
                  setTimeout(function(){
                    document.querySelectorAll('.container>div')[0].classList.remove('a');
                  },100)
                  break;
        case 's': new Audio(keys[1]).play();
                  document.querySelectorAll('.container>div')[1].classList.add('a');
                  setTimeout(function(){
                  document.querySelectorAll('.container>div')[1].classList.remove('a');
                  },100)
                  break;
        case 'd': new Audio(keys[2]).play(); 
                  document.querySelectorAll('.container>div')[2].classList.add('a');
                  setTimeout(function(){
                  document.querySelectorAll('.container>div')[2].classList.remove('a');
                  },100)
                  break;
        case 'j': new Audio(keys[3]).play(); 
                  document.querySelectorAll('.container>div')[3].classList.add('a');
                  setTimeout(function(){
                  document.querySelectorAll('.container>div')[3].classList.remove('a');
                  },100)
                  break;
        case 'k': new Audio(keys[4]).play(); 
                  document.querySelectorAll('.container>div')[4].classList.add('a');
                  setTimeout(function(){
                  document.querySelectorAll('.container>div')[4].classList.remove('a');
                  },100)
                  break;

        case 'l': new Audio(keys[5]).play(); 
                  document.querySelectorAll('.container>div')[5].classList.add('a');
                  setTimeout(function(){
                  document.querySelectorAll('.container>div')[5].classList.remove('a');
                  },100)
                  break;
      }
})




