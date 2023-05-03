// variabili
const numb = document.querySelector("ul");

// creazione numeri
for (let n = 1; n <= 100; n++) {
 
    const element =`<li class="box box__${n}">${n}</li>`;

    numb.innerHTML+= element
}
