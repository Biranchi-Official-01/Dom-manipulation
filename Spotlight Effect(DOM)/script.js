addEventListener('mousemove',(e)=>{
    console.log("mouse move");
    
    document.body.style.setProperty('--x',e.clientX +'px')
    document.body.style.setProperty('--y',e.clientY +'px')
})