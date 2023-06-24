document.querySelector('img').addEventListener('dragstart',function(e){
    console.log('img dragged');
    e.dataTransfer.setData('text/plain',e.target.id)
    e.dataTransfer.clearData
})


document.querySelector('.box2').addEventListener('dragover',function(e){
    e.preventDefault();
    $('.box2 h1').remove();
})

document.querySelector('.box2').addEventListener('drop',function(e){
    e.dataTransfer.getData('text/plain');
    this.classList.add('drop');
    document.querySelector('button').innerHTML='<a class="app" href="GameDev.zip" download>DOWNLOAD HERE</a>';
    e.target.appendChild(document.querySelector('img'));
})
