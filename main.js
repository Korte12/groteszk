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

function renderTable(data){//Elkezdem megirni a render függvényt
    const tablebody = tbody;//Létrehozok egy tablebody-t aminek az értéke tbody
    tbody.innerHTML = ''; // tbody innerHtml-je üres string

    for (element of data) {//Elkezdem a for ciklust. Kiválasztom az element-ből a datát
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

renderTable(array) //Meghivom a renderTable függvényt és az array paramétert fogja kapni

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

    function generateForm(formF){  //Függvényt definiálunk
        const form = document.createElement('form') //Létrehozom a formot
        document.body.appendChild(form) //Hozzá appendelem a body-hoz
        form.id = "form" //A form id-ja form
        form.action = "#" //A form action-je #
    
        for(let i = 0; i < formF.length; i++ ){  //A form összes elemén végig megyünk egy ciklussal
            const div =  document.createElement('div') //Létrehozok egy div elemet
            form.appendChild(div) //Hozzá appendelem a formhoz
            
            const label = document.createElement('label') //Létrehozok egy label elemet
            div.appendChild(label) //Hozzá appendelem a div-hez
    
            label.htmlFor = formm[i].id //htmlFor egyenlő lesz a form-idjával
            label.innerHTML = formm[i].label //A label innerHTML értéke a form1 objektumban eltárolt label lesz
    
            const br = document.createElement('br') //Sortörést hozok létre
            div.appendChild(br) //Hozzá appendelem a div-hez
    
            const input = document.createElement('input') //Inputot hozok létre
            div.appendChild(input)//Hozzá appendelem a div-hez
            input.type = "text" //Input tipusa text
            input.id = formm[i].id //Input id megegyezik az objektumban eltárolt id-val
            input.name = formm[i].id //Input name megegyezik az objektumban eltárolt id-val
    
            const br2 = document.createElement('br') //Sortörést hozok létre
            div.appendChild(br2) //Hozzá appendelem a div-hez
    
            const span = document.createElement('span') //Spant hozok létre
            div.appendChild(span) //Hozzá appendelem a div-hez
            span.className = "error" //A span classa az error lesz
             
            const br3 = document.createElement('br') //Sortörést hozok létre
            div.appendChild(br3) //Hozzá appendelem a div-hez
            
        }
    
        const button = document.createElement('button') //Létrehozok egy gombot
        button.innerHTML = "Hozzáadás" //A gomb értéke a "Hozzáadás" szöveg lesz
        form.appendChild(button) //Hozzá appendelem a formhoz a gombot
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
    renderTable(array);//Meghivom a renderTable függvényt mégegyszer és az array paramétert fogja kapni
})