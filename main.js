const header = { //header objektum létrehozása
    elso: "Nemzetiség", // értékadás a tulajdonságnak
    masodik: "Szerző",// értékadás a tulajdonságnak
    harmadik : "Mű"// értékadás a tulajdonságnak
}

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

const tbody = document.createElement('tbody'); // Létrehozom a tbody-t
table.appendChild(tbody); // Hozzá appendelem a table-hez

generateHeader(header) //Meghivom a függvényt

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

renderTable(array) //Meghivom a renderTable függvényt

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

function ValidateField2(firstElement, secondElement, ErrorMessage){ //Függvényt definiálunk
    let valid = true //A valid értéke igaz
    if(firstElement.value != "" && !ValidateField(secondElement, ErrorMessage)){ // Ellenőrizzük hogy a két mező közül az egyik kivan e töltve és ha igen akkor a másik mezőt validáljuk
        valid = false //A valid értéke hamis
    }
    if(secondElement.value != "" && !ValidateField(firstElement, ErrorMessage)){ // Ellenőrizzük hogy a két mező közül az egyik kivan e töltve és ha igen akkor a másik mezőt validáljuk
        valid = false //A valid értéke hamis
    }
    return valid //A valid értékkel térünk vissza
}

function generateHeader(headerR){ //Függvényt definiálunk
    const thead = document.createElement('thead'); //Létrehozok egy thead elemet
    table.appendChild(thead);//Hozzá appendelem a táblázathoz
    const tr = document.createElement('tr');//Létrehozok egy sor elemet
    thead.appendChild(tr);//Hozzá appendelem a fej részhez
        for(const i in headerR){ //Végig iterálok a header objektumon
            const th = document.createElement('th') //Létrehozok egy th elemet
            th.innerHTML = headerR[i] //A th tartalma a header objektumban eltárolt értékek lesznek
            tr.appendChild(th) //Hozzá appendeljük a sorhoz a th-t
        }
     
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

    if(!ValidateField2(szerzo2H, szerzomu2H, "A mező kitöltése kötelező!")){ //Ha a függvényünk hamissal tér vissza akkor kiirja az error üzenetet
        valid = false;//A valid értéke hamis lesz
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
    renderTable(array);//Meghivom a renderTable függvényt mégegyszer

})