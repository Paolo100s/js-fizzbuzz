// variabili
const contenitore = document.getElementById("box");

// creazione numeri
for (let n = 1; n <=100; n++) {

    // creazione elemento
    const quadrato = document.createElement("div")
    quadrato.classList.add("square")

    let numb;

    // divisibile per 3 e per 5
    if (n % 3 === 0 && n % 5 === 0) {
        numb = "FizzBuzz"
    }

    // divisibile per 3
    else if (n % 3 === 0)
        numb = "Fizz"

    // divisibile per 5
    else if (n % 5 === 0)
        numb = "Buzz"

    // altro
    else 
       numb = n
    

    quadrato.append(numb);
    contenitore.append(quadrato);
}
