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

const formm = [// A tömb létehozása
    {// A tömb első elemét létrehozom
        label: "Származás:",//Értékadás
        id: "szarmazas",//Értékadás
    },
    {// A tömb második elemét létrehozom
        label: "1. szerző:",//Értékadás
        id: "szerzo1",//Értékadás
    },
    {// A tömb harmadik elemét létrehozom
        label: "1. szerző műve:",//Értékadás
        id: "szerzo1mu"//Értékadás
    },
    {// A tömb negyedik elemét létrehozom
        label: "2. szerző:",//Értékadás
        id: "szerzo2",//Értékadás
    },
    {// A tömb ötödik elemét létrehozom
        label: "2. szerző műve:",//Értékadás
        id: "szerzo2mu"//Értékadás
    }   
]

generateForm(formm) //Meghivom a függvényt


const table = document.createElement('table'); //Létrehozom a table-t
document.body.appendChild(table);//Hozzá appendelem a body-hoz

const tbody = document.createElement('tbody'); // Létrehozom a tbody-t
table.appendChild(tbody); // Hozzá appendelem a table-hez

generateHeader(header) //Meghivom a függvényt

renderTable(array) //Meghivom a renderTable függvényt és az array paramétert fogja kapni

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
    renderTable(array);//Meghivom a renderTable függvényt mégegyszer és az array paramétert fogja kapni
})