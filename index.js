document.querySelectorAll('span')[0].addEventListener('click',function(){
    document.querySelector('.carousel').scrollLeft-=100
})

document.querySelectorAll('span')[1].addEventListener('click',function(){
    document.querySelector('.carousel').scrollLeft+=100
})

let count=1
setInterval(function(){
     if(count==15){
        document.querySelector('.carousel').scrollLeft-=1500
        count=1
     }
     else{
        document.querySelector('.carousel').scrollLeft+=100
        count++
     }
},1000)