const th1NE = "Nemzetiség"//Értékadás
const th2SZ = "Szerző"//Értékadás
const th3MU = "Mű"//Értékadás
//

const nemzetiseg1 = "Orosz";//Értékadás
const nemzetiseg2 = "Cseh";//Értékadás
const nemzetiseg3 = "Magyar";//Értékadás
const nemzetiseg4 = "Svájc";//Értékadás

//

const szerzoNev1 = "Gogol";//Értékadás
const szerzoNev2 = "Csehov";//Értékadás
const szeroNev3 = "Francz Kafka";//Értékadás
const szerzoNev4 = "Örkény István";//Értékadás
const szerzoNev5 = "József Attila";//Értékadás
const szerzoNev6 = "Friedrich Dürrenmatt";//Értékadás

//

const mu1 = "A köpönyeg";//Értékadás
const mu2 = "A csinovnyik halála";//Értékadás
const mu3 = "Az átváltozás";//Értékadás
const mu4 = "Egyperces Novellák";//Értékadás
const mu5 = "Klárisok";//Értékadás
const mu6 = "A fizikusok";//Értékadás



const table = document.createElement('table'); //Létrehozom a table-t
document.body.appendChild(table);//Hozzá appendelem a body-hoz

const thead = document.createElement('thead');//Létrehozom a thead-et
table.appendChild(thead);//Hozzá appendelem a table-hez

const tr = document.createElement('tr');//Létrehozom a tr-t
thead.appendChild(tr);//Hozzá appendelem a thead-hez

const th1 = document.createElement('th');//Létrehozom az első th-t
th1.innerHTML = th1NE; //Megadom az értékét
tr.appendChild(th1);//Hozzá appendelem a sorhoz

const th2 = document.createElement('th');//Létrehozom a második th-t
th2.innerHTML = th2SZ;//Megadom az értékét
tr.appendChild(th2);//Hozzá appendelem a sorhoz

const th3 = document.createElement('th');//Létrehozom a harmadik th-t
th3.innerHTML = th3MU;//Megadom az értékét
tr.appendChild(th3);//Hozzá appendelem a sorhoz

const tbody = document.createElement('tbody');//Létrehozom a tbody-t
table.appendChild(tbody);//Hozzá appendelem a table-hez

const row1 = document.createElement('tr');//Létrehozom az első sort
tbody.appendChild(row1);// Hozzá appendelem a tbody-hoz
const cell1_1 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell1_1.innerHTML = nemzetiseg1;//Megadom az értékét
cell1_1.rowSpan = 2;//rowSpan-t állitok be hogy jó legyen az elrendezés
row1.appendChild(cell1_1);//Hozzá appendelem a sorhoz a cellát
const cell1_2 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell1_2.innerHTML = szerzoNev1;//Megadom az értékét
row1.appendChild(cell1_2);//Hozzá appendelem a sorhoz a cellát
const cell1_3 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell1_3.innerHTML = mu1;//Megadom az értékét
row1.appendChild(cell1_3);//Hozzá appendelem a sorhoz a cellát
const row2 = document.createElement('tr');//Létrehozom a második sort
tbody.appendChild(row2);// Hozzá appendelem a tbody-hoz
const cell2_1 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell2_1.innerHTML = szerzoNev2;//Megadom az értékét
row2.appendChild(cell2_1);//Hozzá appendelem a sorhoz a cellát
const cell2_2 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell2_2.innerHTML = mu2;//Megadom az értékét
row2.appendChild(cell2_2);//Hozzá appendelem a sorhoz a cellát
const row3 = document.createElement('tr');//Létrehozom a harmadik sort
tbody.appendChild(row3);// Hozzá appendelem a tbody-hoz
const cell3_1 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell3_1.innerHTML = nemzetiseg2;//Megadom az értékét
row3.appendChild(cell3_1);//Hozzá appendelem a sorhoz a cellát
const cell3_2 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell3_2.innerHTML = szeroNev3;//Megadom az értékét
row3.appendChild(cell3_2);//Hozzá appendelem a sorhoz a cellát
const cell3_3 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell3_3.innerHTML = mu3;//Megadom az értékét
row3.appendChild(cell3_3);//Hozzá appendelem a sorhoz a cellát
const row4 = document.createElement('tr');//Létrehozom a negyedik sort
tbody.appendChild(row4);// Hozzá appendelem a tbody-hoz
const cell4_1 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell4_1.innerHTML = nemzetiseg3;//Megadom az értékét
row4.appendChild(cell4_1);//Hozzá appendelem a sorhoz a cellát
cell4_1.rowSpan = 2;//rowSpan-t állitok be hogy jó legyen az elrendezés
const cell4_2 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell4_2.innerHTML = szerzoNev4;//Megadom az értékét
row4.appendChild(cell4_2);//Hozzá appendelem a sorhoz a cellát
const cell4_3 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell4_3.innerHTML = mu4;//Megadom az értékét
row4.appendChild(cell4_3);//Hozzá appendelem a sorhoz a cellát
const row5 = document.createElement('tr');//Létrehozom az ötödik sort
tbody.appendChild(row5);// Hozzá appendelem a tbody-hoz
const cell5_1 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell5_1.innerHTML = szerzoNev5;//Megadom az értékét
row5.appendChild(cell5_1);//Hozzá appendelem a sorhoz a cellát
const cell5_2 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell5_2.innerHTML = mu5;//Megadom az értékét
row5.appendChild(cell5_2);//Hozzá appendelem a sorhoz a cellát
const row6 = document.createElement('tr');//Létrehozom hatodik sort
tbody.appendChild(row6);// Hozzá appendelem a tbody-hoz
const cell6_1 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell6_1.innerHTML = nemzetiseg4;//Megadom az értékét
row6.appendChild(cell6_1);//Hozzá appendelem a sorhoz a cellát
const cell6_2 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell6_2.innerHTML = szerzoNev6;//Megadom az értékét
row6.appendChild(cell6_2);//Hozzá appendelem a sorhoz a cellát
const cell6_3 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell6_3.innerHTML = mu6;//Megadom az értékét
row6.appendChild(cell6_3);//Hozzá appendelem a sorhoz a cellát