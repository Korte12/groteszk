/**
 * Ezzel a fügvénnyel a táblázatunkat hozzuk létre
 * 
 */
function renderTable(data, tbody){//Elkezdem megirni a render függvényt
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

        tbody.appendChild(row); //Hozzá appendelem a sort

        if (element.szerzo2 && element.mu2) {//Ha az element.szerzo2 és element.mu2
            const row1 = document.createElement('tr');//Létrehozok egy tr-t

            const szerzo2 = document.createElement('td');//Létrehozok egy td-t
            szerzo2.innerHTML = element.szerzo2;//Megadom hogy mi legyen a cella értéke
            row1.appendChild(szerzo2);//Hozzá appendelem a sorhoz

            const mu2 = document.createElement('td');//Létrehozok egy td-t
            mu2.innerHTML = element.mu2;//Megadom hogy mi legyen a cella értéke
            row1.appendChild(mu2);//Hozzá appendelem a sorhoz
            tbody.appendChild(row1); //Hozzá appendelem a tablebody-hoz
        }
    }
}

/**
 * Ezzel a függvénnyel azt ellenőrizzük hogy egy adott input mező üres-e és ha igen akkor hibaüzenetet jelenit meg
 * 
 */
function ValidateField(inputElement, ErrorMessage){//Függvényt definiálunk
    let valid = true;//A valid értéke igaz
    if(inputElement.value === ""){//Ha az inputElement értéke semmi
        const parentElement = inputElement.parentElement //Az inputElement szülő elemét hozzá rendeljük a parentElementhez
        const error = parentElement.querySelector(".error"); // Megkeressük az első elemet amin rajta van az error
        if(error) { //Ha az error
            error.innerHTML = ErrorMessage; // Kiirjuk a hibaüzenetet
        }
        valid = false // A valid változó értékét hamisra cseréljük
    }
    return valid //Valid értékkel térek vissza
}

/**
 * Ezzel a függvénnyel ellenőrizzük két mező értékét és ha barmelyik üres akkor hibaüzenetet jelenit meg
 * 
 */

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

/**
 * Ezzel a függvénnyel létrehozzuk táblázatunk fejlécét
 * 
 */
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

/**
 * Ezzel a függvénnyel létrehozzuk a formunkat
 * 
 */
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
