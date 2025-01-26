const header = [ //header tömb létrehozása
{ 
    elso: "Nemzetiség", // értékadás a tulajdonságnak
    masodik: "Szerző",// értékadás a tulajdonságnak
    harmadik : "Mű"// értékadás a tulajdonságnak
}
];

const array = [ // tömb létrehozása
{ 
    nemzetiseg : "Orosz",// értékadás a tulajdonságnak
    szerzo : "Gogol",// értékadás a tulajdonságnak
    mu : "A köpönyeg",// értékadás a tulajdonságnak
    szerzo2 : "Csehov",// értékadás a tulajdonságnak
    mu2 : "A csinovnyik halála"// értékadás a tulajdonságnak
},
{ 
    nemzetiseg : "Cseh",// értékadás a tulajdonságnak
    szerzo : "Franz Kafka",// értékadás a tulajdonságnak
    mu : "Az átváltozás",// értékadás a tulajdonságnak
},
{ 
    nemzetiseg : "Magyar",// értékadás a tulajdonságnak
    szerzo : "Örkény István",// értékadás a tulajdonságnak
    mu : "Egyperces Novellák",// értékadás a tulajdonságnak
    szerzo2 : "József Attila",// értékadás a tulajdonságnak
    mu2 : "Klárisok"// értékadás a tulajdonságnak
},
{ 
    nemzetiseg : "Svájc",// értékadás a tulajdonságnak
    szerzo : "Friedrich Dürrenmatt",// értékadás a tulajdonságnak
    mu : "A fizikusok",// értékadás a tulajdonságnak
}
];


const table = document.createElement('table'); //Létrehozom a table-t
document.body.appendChild(table);//Hozzá appendelem a body-hoz

function renderTable() {
const thead = document.createElement('thead');//Létrehozom a thead-et
table.appendChild(thead);//Hozzá appendelem a table-hez

const tr = document.createElement('tr');//Létrehozom a tr-t
thead.appendChild(tr);//Hozzá appendelem a thead-hez


for (let element in header[0]) {//Elkezdem a for ciklust, értéketadok
    const th = document.createElement('th'); // Létrehozom a th-t
    th.innerHTML = header[0][element]; // Megadom az értéket a header-ből
    tr.appendChild(th); // Hozzá appendelem a sorhoz
  }
  const tbody = document.createElement('tbody'); // Létrehozom a tbody-t
  table.appendChild(tbody); // Hozzá appendelem a table-hez

  for (let i = 0; i < array.length; i++) {
    const row1 = document.createElement('tr'); // Első sor az adott névhez
    tbody.appendChild(row1); // Hozzá appendelem a tbody-hoz

    const cell1 = document.createElement('td'); // Név cella
    cell1.innerHTML = array[i].nemzetiseg;//Megadom hogy mi legyen a cella értéke
    cell1.rowSpan = array[i].szerzo2 && array[i].mu2 ? 2 : 1; //Ha van második esemény, két sort fed le
    row1.appendChild(cell1); // Hozzá appendelem a sorhoz

    const cell2 = document.createElement('td'); // Első esemény cella
    cell2.innerHTML = array[i].szerzo;//Megadom hogy mi legyen a cella értéke
    row1.appendChild(cell2);// Hozzá appendelem a sorhoz

    const cell3 = document.createElement('td'); // Első évszám cella
    cell3.innerHTML = array[i].mu;//Megadom hogy mi legyen a cella értéke
    row1.appendChild(cell3);// Hozzá appendelem a sorhoz

    if (array[i].szerzo2 && array[i].mu2) { //Akkor teljesül ha van szerzo2 és mu2
        const row2 = document.createElement('tr'); // Létrehozok egy tr-t
        tbody.appendChild(row2); // Hozzá appendelem a tbody-hoz

    const cell4 = document.createElement('td'); // Második esemény cella
    cell4.innerHTML = array[i].szerzo2;//Megadom hogy mi legyen a cella értéke
    row2.appendChild(cell4);// Hozzá appendelem a sorhoz

    const cell5 = document.createElement('td'); // Második évszám cella
    cell5.innerHTML = array[i].mu2;//Megadom hogy mi legyen a cella értéke
    row2.appendChild(cell5);// Hozzá appendelem a sorhoz
    }
  }

}

renderTable() //Meghivom a renderTable függvényt