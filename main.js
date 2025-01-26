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

const thead = document.createElement('thead');//Létrehozom a thead-et
table.appendChild(thead);//Hozzá appendelem a table-hez

const tr = document.createElement('tr');//Létrehozom a tr-t
thead.appendChild(tr);//Hozzá appendelem a thead-hez

const tbody = document.createElement('tbody'); // Létrehozom a tbody-t
table.appendChild(tbody); // Hozzá appendelem a table-hez

const nemzetiseg = document.createElement('th')//Létrehozok egy th elemet
nemzetiseg.innerHTML = "Nemzetiség" //Megadom az értékét
tr.appendChild(nemzetiseg);//Hozzá appendelem a sorhoz

const szerzo = document.createElement('th')//Létrehozok egy th elemet
szerzo.innerHTML = "Szerző"//Megadom az értékét
tr.appendChild(szerzo)//Hozzá appendelem a sorhoz

const mu = document.createElement('th');//Létrehozok egy th elemet
mu.innerHTML = "Mű"//Megadom az értékét
tr.appendChild(mu)//Hozzá appendelem a sorhoz

function renderTable(){//Elkezdem megirni a render függvényt
    const tablebody = tbody;//Létrehozok egy tablebody-t aminek az értéke tbody
    tbody.innerHTML = ''; // tbody innerHtml-je üres string

    for (element of array) {//Elkezdem a for ciklust. Kiválasztom az array ,,element"-jét
        let row = document.createElement('tr');//Létrehozok egy tr-t

        const nemzetisegC = document.createElement('td'); //Létrehozok egy td-t
        nemzetisegC.innerHTML = element.nemzetiseg; //Megadom az innerHTML értékét
        nemzetisegC.rowSpan = element.szerzo2 ? 2 : 1; // rowSpan-t vezetek be a megfelelő elrendezés érdekében
        row.appendChild(nemzetisegC);//Hozzá appendelem a sorhoz

        const szerzo1 = document.createElement('td');//Létrehozok egy td-t
        szerzo1.innerHTML = element.szerzo;//Megadom az innerHTML értékét
        row.appendChild(szerzo1);//Hozzá appendelem a sorhoz

        const mu1 = document.createElement('td');//Létrehozok egy td-t
        mu1.innerHTML = element.mu;//Megadom az innerHTML értékét
        row.appendChild(mu1);//Hozzá appendelem a sorhoz

        tablebody.appendChild(row); //Hozzá appendelem a sort

        if (element.szerzo2 && element.mu2) {//Ha az element.szerzo2 és element.mu2
            const row1 = document.createElement('tr');//Létrehozok egy tr-t

            const szerzo2 = document.createElement('td');//Létrehozok egy td-t
            szerzo2.innerHTML = element.szerzo2;//Megadom hogy mi legyen a cella értéke
            row1.appendChild(szerzo2);//Hozzá appendelem a sorhoz

            const mu2 = document.createElement('td');//Létrehozok egy td-t
            mu2.innerHTML = element.mu2;//Megadom hogy mi legyen a cella értéke
            row1.appendChild(mu2);//Hozzá appendelem a sorhoz
            tablebody.appendChild(row1); //Hozzá appendelem a tablebody-hoz
        }
    }
}

renderTable() //Meghivom a renderTable függvényt

function ValidateField(inputElement, ErrorMessage){//Függvényt definiálunk
    let valid = true;//A valid értéke igaz
    if(inputElement.value === ""){//Ha az inputElement üres
        const parentElement = inputElement.parentElement //Az inputElement szülő elemét hozzá rendeljük a parentElementhez
        const error = parentElement.querySelector(".error"); // Megkeressük az első elemet amin rajta van az error
        if(error.innerHTML === "") { //Ha az error innerHTML-je üres akkor megyünk bele
            error.innerHTML = ErrorMessage; // Kiirjuk a hibaüzenetet
        }
        valid = false // A valid változó értékét hamisra cseréljük
    }
    return valid //Valid értékkel térek vissza
}

const form = document.getElementById("form") //Lekérem a html form id-ját
form.addEventListener('submit', function(e){//Eseménykezelőt adok a form-hoz
    e.preventDefault()//Megakadályozom hogy a böngésző alapártelmezetten lefusson
    const szarmazasH = document.getElementById("szarmazas")//Lekérem a html form id-ját
    const szerzo1H = document.getElementById("szerzo1")//Lekérem a html form id-ját
    const szerzo2H = document.getElementById("szerzo2")//Lekérem a html form id-ját
    const szerzomu1H = document.getElementById("szerzo1mu")//Lekérem a html form id-ját
    const szerzomu2H = document.getElementById("szerzo2mu")//Lekérem a html form id-ját

    const szarmazasV = szarmazasH.value ///Eltárolom egy változóban az értéket
    const szerzo1V = szerzo1H.value///Eltárolom egy változóban az értéket
    const szerzo2V = szerzo2H.value///Eltárolom egy változóban az értéket
    const szerzomu1V = szerzomu1H.value///Eltárolom egy változóban az értéket
    const szerzomu2V = szerzomu2H.value//Eltárolom egy változóban az értéket

    const thisForm = e.currentTarget //Az aktuális form
    const errorElements = thisForm.querySelectorAll('.error') //Errorokat eltárolom egy változóban

    for(const i of errorElements){ //Végigmegyek az errorokon és "" ra állitom az értéküket
        i.innerHTML = ""
    }

    let valid = true; // A valid változó értéke igaz

    if(!ValidateField(szarmazasH, "A mező kitöltése kötelező!")){ //Ha a függvényünk hamissal tér vissza akkor kiirja az error üzenetet
        valid = false; //A valid értéke hamis lesz
    }

    if(!ValidateField(szerzo1H, "A mező kitöltése kötelező!")){ //Ha a függvényünk hamissal tér vissza akkor kiirja az error üzenetet
        valid = false; //A valid értéke hamis lesz
    }

    if(!ValidateField(szerzomu1H, "A mező kitöltése kötelező!")){ //Ha a függvényünk hamissal tér vissza akkor kiirja az error üzenetet
        valid = false; //A valid értéke hamis lesz
    }

    if(szerzo2V != "" && !ValidateField(szerzomu2H, "A mező kitöltése kötelező!")){ //Ellenörzöm hogy az szerzo2 üres e illetve függvénnyel validálok
        valid = false //A valid értéke hamis lesz
    }
    if(szerzomu2V != "" && !ValidateField(szerzo2H, "A mező kitöltése kötelező!")){ //Ellenörzöm hogy az szerzomu2 üres e illetve függvénnyel validálok
        valid = false //A valid értéke hamis lesz
    }


    if(valid){
        if(szerzo2V == "" && szerzomu2V == ""){ //Ha a szerzo2 es szerzomu2 üres akkor
        const new_person = { //Létrehozok egy új elemet
            nemzetiseg: szarmazasV, //Értéket adok
            szerzo: szerzo1V,//Értéket adok
            mu: szerzomu1V,//Értéket adok
        }
    array.push(new_person)//Hozzárakom az arrayhez az új elemet

    }
    else {
        const new_person = { //Létrehozok egy új elemet
            nemzetiseg: szarmazasV, //Értéket adok
            szerzo: szerzo1V,//Értéket adok
            szerzo2: szerzo2V,//Értéket adok
            mu: szerzomu1V,//Értéket adok
            mu2: szerzomu2V//Értéket adok
        }
    array.push(new_person)//Hozzárakom az arrayhez az új elemet
    }
}
    thisForm.reset()//Üres string-et használok törlődik a táblázat
    renderTable();//Meghivom a renderTable függvényt mégegyszer

})