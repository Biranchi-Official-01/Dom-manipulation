const para = document.querySelector("p");

const charecter = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrseuvwxyz";

const text = para.innerText;

let iteration = 0;

para.addEventListener("mouseenter", function () {
    function randomText() {
    const str = text
      .split("")
      .map((char, index) => {
        if (index < iteration) {
          return char;
        }
        return charecter.split("")[Math.floor(Math.random() * 53)];
      })
      .join("");

    para.innerText = str;

    iteration += 0.5;
  }

  setInterval(randomText, 20);
  
});
