/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

const title = document.querySelector("h1");
const changeTitle = function () {
  title.innerText = "Questo è il titolo modificato";
};
changeTitle();
/* ESERCIZIO 2
          Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
       */

const addClassToTitle = function () {
  title.classList.add("myHeading");
};
addClassToTitle();
/* ESERCIZIO 3
          Scrivi una funzione per che cambi il testo dei p figli di un div
         */

const changePcontent = function () {
  const cambiaParagrafo = document.querySelectorAll("div p");
  cambiaParagrafo.forEach((x) => (x.innerText = "Cambio il testo di tutti i p all'interno di div"));
};
changePcontent();
/* ESERCIZIO 4
          Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
         */

const changeUrls = function () {
  const cambiaLink = document.querySelectorAll("a");
  console.log(cambiaLink);
  cambiaLink.forEach((x) => {
    x.href = "https://www.google.com";
  });
};
changeUrls();
/* ESERCIZIO 5
          Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
       */

const addToTheSecond = function () {
  const secondaLista = document.getElementById("secondList");
  const liAdd = document.createElement("li");
  liAdd.innerText = "4th";
  secondaLista.appendChild(liAdd);
};
addToTheSecond();
/* ESERCIZIO 6
          Scrivi una funzione che aggiunga un secondo paragrafo al primo div
       */

const addParagraph = function () {
  const primoDiv = document.querySelector("div");
  const paragrafo = document.createElement("p");
  paragrafo.innerText = "Io sono il paragrafo del primo Div";
  primoDiv.appendChild(paragrafo);
};
addParagraph();
/* ESERCIZIO 7
          Scrivi una funzione che faccia scomparire la prima lista non ordinata
       */

const primaLista = document.querySelector("ul");
const hideFirstUl = function () {
  primaLista.style.display = "none";
};
primaLista.onclick = hideFirstUl;
/* ESERCIZIO 8 
          Scrivi una funzione che renda verde il background di ogni lista non ordinata
         */

const paintItGreen = function () {
  let liste = document.getElementsByTagName("ul");
  liste = Array.from(liste);
  liste.forEach((x) => (x.style.backgroundColor = "green"));
};
paintItGreen();

/* ESERCIZIO 9
          Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
         */

const makeItClickable = function () {
  title.style.userSelect = "none";
  title.innerText = title.innerText.slice(0, -1);
};
title.onclick = makeItClickable;

/* ESERCIZIO 10
          Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
         */

const linkFooter = document.querySelector("footer");
const revealFooterLink = function () {
  window.alert("https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents");
};
linkFooter.onclick = revealFooterLink;
/* ESERCIZIO 11
          Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
          La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
       */
const titoliTable = ["immagine", "nome prodotto", "quantità", "prezzo"];
const tableArea = document.getElementById("tableArea");
const table = document.createElement("table");
const generateTable = function () {
  const tHead = document.createElement("thead");
  const tr = document.createElement("tr");
  for (let i = 0; i < titoliTable.length; i++) {
    const td = document.createElement("td");
    td.innerText = titoliTable[i];
    tr.appendChild(td);
  }
  tableArea.appendChild(table);
  table.appendChild(tHead);
  tHead.appendChild(tr);
};
generateTable();
/* ESERCIZIO 12
          Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
       */
const tbody = document.createElement("tbody");
table.appendChild(tbody);
const elemento = ["img.jpg", "phone", "4", "700€"];
const addRow = function (elemento) {
  const tr = document.createElement("tr");
  for (let i = 0; i < elemento.length; i++) {
    const td = document.createElement("td");
    td.innerText = elemento[i];
    tr.appendChild(td);
  }
  tbody.appendChild(tr);
};
addRow(elemento);
/* ESERCIZIO 14
         Crea una funzione che nasconda le immagini della tabella quando eseguita
       */
const hideAllImages = function () {
  const td = document.getElementsByTagName("td");
  for (let i = 0; i < td.length; i++) {
    if (i % 4 === 0) {
      td[i].style.display = "none";
    }
  }
};
hideAllImages();
/* EXTRA ESERCIZIO 15
         Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
       */

const h2 = document.getElementById("changeMyColor");
const colori = ["red", "blue", "green", "black", "pink", "yellow", "lightblue", "purple"];
const changeColorWithRandom = function () {
  const num = Math.floor(Math.random() * 8);
  console.log(colori[num]);
  h2.style.color = colori[num];
};
h2.onclick = changeColorWithRandom;
/* EXTRA ESERCIZIO 16
         Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
       */

const deleteVowels = function () {
  let h1 = document.getElementsByTagName("h1");
  let h2 = document.getElementsByTagName("h2");
  let h3 = document.getElementsByTagName("h3");
  let li = document.getElementsByTagName("li");
  let p = document.getElementsByTagName("p");
  let a = document.getElementsByTagName("a");
  let td = document.getElementsByTagName("td");
  h1 = Array.from(h1);
  h2 = Array.from(h2);
  h3 = Array.from(h3);
  li = Array.from(li);
  p = Array.from(p);
  a = Array.from(a);
  td = Array.from(td);
  console.log(h1);
  let app = "";
  for (let i = 0; i < h1.length; i++) {
    app = h1[i].innerText;
    app = [...app];
    let app2 = app.filter(
      (x) =>
        x !== "a" &&
        x !== "e" &&
        x !== "i" &&
        x !== "o" &&
        x !== "u" &&
        x !== "A" &&
        x !== "E" &&
        x !== "I" &&
        x !== "O" &&
        x !== "U"
    );
    app = app2.join("");
    h1[i].innerText = app;
  }
  for (let i = 0; i < h2.length; i++) {
    let app = "";
    app = h2[i].innerText;
    app = [...app];
    let app2 = app.filter(
      (x) =>
        x !== "a" &&
        x !== "e" &&
        x !== "i" &&
        x !== "o" &&
        x !== "u" &&
        x !== "A" &&
        x !== "E" &&
        x !== "I" &&
        x !== "O" &&
        x !== "U"
    );
    app = app2.join("");
    h2[i].innerText = app;
  }
  for (let i = 0; i < h3.length; i++) {
    let app = "";
    app = h3[i].innerText;
    app = [...app];
    let app2 = app.filter(
      (x) =>
        x !== "a" &&
        x !== "e" &&
        x !== "i" &&
        x !== "o" &&
        x !== "u" &&
        x !== "A" &&
        x !== "E" &&
        x !== "I" &&
        x !== "O" &&
        x !== "U"
    );
    app = app2.join("");
    h3[i].innerText = app;
  }
  for (let i = 0; i < li.length; i++) {
    let app = "";
    app = li[i].innerText;
    app = [...app];
    let app2 = app.filter(
      (x) =>
        x !== "a" &&
        x !== "e" &&
        x !== "i" &&
        x !== "o" &&
        x !== "u" &&
        x !== "A" &&
        x !== "E" &&
        x !== "I" &&
        x !== "O" &&
        x !== "U"
    );
    app = app2.join("");
    li[i].innerText = app;
  }
  for (let i = 0; i < p.length; i++) {
    let app = "";
    app = p[i].innerText;
    app = [...app];
    let app2 = app.filter(
      (x) =>
        x !== "a" &&
        x !== "e" &&
        x !== "i" &&
        x !== "o" &&
        x !== "u" &&
        x !== "A" &&
        x !== "E" &&
        x !== "I" &&
        x !== "O" &&
        x !== "U"
    );
    app = app2.join("");
    p[i].innerText = app;
  }
  for (let i = 0; i < a.length; i++) {
    let app = "";
    app = a[i].innerText;
    app = [...app];
    let app2 = app.filter(
      (x) =>
        x !== "a" &&
        x !== "e" &&
        x !== "i" &&
        x !== "o" &&
        x !== "u" &&
        x !== "A" &&
        x !== "E" &&
        x !== "I" &&
        x !== "O" &&
        x !== "U"
    );
    app = app2.join("");
    a[i].innerText = app;
  }
  for (let i = 0; i < td.length; i++) {
    let app = "";
    app = td[i].innerText;
    app = [...app];
    let app2 = app.filter(
      (x) =>
        x !== "a" &&
        x !== "e" &&
        x !== "i" &&
        x !== "o" &&
        x !== "u" &&
        x !== "A" &&
        x !== "E" &&
        x !== "I" &&
        x !== "O" &&
        x !== "U"
    );
    console.log(app2);
    app = app2.join("");
    td[i].innerText = app;
  }
};
deleteVowels();
