const para = document.querySelector("p")

const charecter  = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrseuvwxyz"

const text = para.innerText

para.addEventListener('mouseenter',()=>{

    setInterval(() => {
        const str = text.split('').map((char,index) =>{
            return charecter.split('')[Math.floor(Math.random()*53)]
        }).join("")

        para.innerText = str
    }, 50);
})