var container = document.createElement("div");
container.setAttribute("class", "container");

var paginationHeading = document.createElement("div");
paginationHeading.setAttribute("class", "flex justify-content");

var heading = document.createElement("div");
heading.setAttribute("class", "text-large font-bold");
heading.innerHTML = "Welcome to Pagination";
paginationHeading.appendChild(heading);

var divDrop = document.createElement("div");
divDrop.setAttribute("class", "flex justify-end margin-top");
var dropDown = document.createElement("select");
dropDown.setAttribute("id", "numData");
var five = document.createElement("option");
five.setAttribute("value", "5");
five.innerText = 5;
dropDown.appendChild(five);

var ten = document.createElement("option");
ten.setAttribute("value", "10");
ten.innerText = 10;
dropDown.appendChild(ten);

var fteen = document.createElement("option");
fteen.setAttribute("value", "15");
fteen.innerText = 15;
dropDown.appendChild(fteen);

var twenty = document.createElement("option");
twenty.setAttribute("value", "20");
twenty.innerText = 20;
dropDown.appendChild(twenty);

divDrop.appendChild(dropDown);

var forData = document.createElement("div");
forData.setAttribute(
    "class",
    "text-center margin-top height-auto font-decoration"
);

var forButton = document.createElement("div");
forButton.setAttribute(
    "class",
    "flex container space-around margin-top margin-bottom"
);
forButton.setAttribute("id", "btns");

container.appendChild(paginationHeading);
container.appendChild(divDrop);
container.appendChild(forData);
container.appendChild(forButton);
document.body.appendChild(container);

var data = [
    {
        id: "1",
        name: "Lura Senger",
        email: "Xander_Collier@yahoo.com",
    },
    {
        id: "2",
        name: "Wilburn Weber",
        email: "Bennett_Kreiger11@yahoo.com",
    },
    {
        id: "3",
        name: "Tyrique Hahn",
        email: "Juston.Altenwerth@yahoo.com",
    },
    {
        id: "4",
        name: "Lenny Bailey",
        email: "Guiseppe_Hegmann@yahoo.com",
    },
    {
        id: "5",
        name: "Vladimir Keeling",
        email: "Louisa_Walsh18@hotmail.com",
    },
    {
        id: "6",
        name: "Kellie Crona",
        email: "Chandler_Abernathy@yahoo.com",
    },
    {
        id: "7",
        name: "Carolina White",
        email: "Royal50@hotmail.com",
    },
    {
        id: "8",
        name: "Alfredo Conn",
        email: "Clarabelle34@hotmail.com",
    },
    {
        id: "9",
        name: "Stan Shanahan",
        email: "Lamar.McClure@hotmail.com",
    },
    {
        id: "10",
        name: "Marvin Fay",
        email: "Osbaldo58@hotmail.com",
    },
    {
        id: "11",
        name: "Torrance Rau",
        email: "Orin45@gmail.com",
    },
    {
        id: "12",
        name: "Harold Gutmann MD",
        email: "Alyce.Stracke37@yahoo.com",
    },
    {
        id: "13",
        name: "Taryn Torphy",
        email: "Dean_Breitenberg71@hotmail.com",
    },
    {
        id: "14",
        name: "Bryana Lang",
        email: "Tatum.Ullrich@yahoo.com",
    },
    {
        id: "15",
        name: "Nyasia Green DDS",
        email: "Dino83@gmail.com",
    },
    {
        id: "16",
        name: "Nasir Gerhold",
        email: "Lilian_Bashirian8@hotmail.com",
    },
    {
        id: "17",
        name: "Raymundo Ritchie PhD",
        email: "Antwan.Schoen15@yahoo.com",
    },
    {
        id: "18",
        name: "Delmer Marvin",
        email: "Kiera62@yahoo.com",
    },
    {
        id: "19",
        name: "Rachel Wilkinson",
        email: "Foster_Conroy@gmail.com",
    },
    {
        id: "20",
        name: "Gladys Howell",
        email: "Constance.Labadie10@yahoo.com",
    },
    {
        id: "21",
        name: "Ciara Klocko",
        email: "Harvey76@yahoo.com",
    },
    {
        id: "22",
        name: "Quentin O'Kon",
        email: "Amely_Cummings2@yahoo.com",
    },
    {
        id: "23",
        name: "Ms. Gabriella Kunde",
        email: "Lorenza_Cummerata@hotmail.com",
    },
    {
        id: "24",
        name: "Gerald Reilly",
        email: "Lia_Konopelski@gmail.com",
    },
    {
        id: "25",
        name: "Brody Carter I",
        email: "Colten.Wilderman90@hotmail.com",
    },
    {
        id: "26",
        name: "Alanis Klocko",
        email: "Johathan.Champlin69@gmail.com",
    },
    {
        id: "27",
        name: "Caroline Miller",
        email: "Delaney.Kozey74@gmail.com",
    },
    {
        id: "28",
        name: "Ms. Merritt McClure",
        email: "Wendy.Zieme@gmail.com",
    },
    {
        id: "29",
        name: "Jovani Schoen",
        email: "Norval_Zieme@hotmail.com",
    },
    {
        id: "30",
        name: "Berniece Bradtke",
        email: "Okey.Fisher39@hotmail.com",
    },
    {
        id: "31",
        name: "Hanna Gottlieb",
        email: "Edna62@hotmail.com",
    },
    {
        id: "32",
        name: "Christiana Bergnaum",
        email: "Donnie.Paucek22@gmail.com",
    },
    {
        id: "33",
        name: "Reid Stehr",
        email: "Hiram69@gmail.com",
    },
    {
        id: "34",
        name: "Evans Ward",
        email: "Liliane72@hotmail.com",
    },
    {
        id: "35",
        name: "Miss Enos Davis",
        email: "Kolby.Grady@hotmail.com",
    },
    {
        id: "36",
        name: "Mathew Lueilwitz",
        email: "Mariah.Hagenes@yahoo.com",
    },
    {
        id: "37",
        name: "Romaine Robel",
        email: "Sheila19@yahoo.com",
    },
    {
        id: "38",
        name: "Immanuel Aufderhar",
        email: "Aileen32@hotmail.com",
    },
    {
        id: "39",
        name: "Julius Reilly Jr.",
        email: "Santa89@yahoo.com",
    },
    {
        id: "40",
        name: "Linnea Borer",
        email: "Jarrett_Hegmann2@hotmail.com",
    },
    {
        id: "41",
        name: "Misael Abernathy IV",
        email: "Robbie42@yahoo.com",
    },
    {
        id: "42",
        name: "Mr. Gerda Jerde",
        email: "Gustave36@hotmail.com",
    },
    {
        id: "43",
        name: "Easton Daugherty",
        email: "Malcolm.Schuster11@hotmail.com",
    },
    {
        id: "44",
        name: "Leanna Gutkowski",
        email: "Chelsea9@gmail.com",
    },
    {
        id: "45",
        name: "Rollin Trantow",
        email: "Marques_Hickle26@gmail.com",
    },
    {
        id: "46",
        name: "Heaven Luettgen",
        email: "Lonnie.Greenfelder95@hotmail.com",
    },
    {
        id: "47",
        name: "Gilda Huel",
        email: "Stephania.Hintz@gmail.com",
    },
    {
        id: "48",
        name: "Javon Walker",
        email: "Lamar_Bailey39@yahoo.com",
    },
    {
        id: "49",
        name: "Stewart King",
        email: "Chasity_Jenkins82@gmail.com",
    },
    {
        id: "50",
        name: "Cortez Lueilwitz",
        email: "Lelia.Mitchell43@gmail.com",
    },
    {
        id: "51",
        name: "Ora Kilback",
        email: "Matt25@gmail.com",
    },
    {
        id: "52",
        name: "Lera Macejkovic",
        email: "Jamal.Donnelly45@hotmail.com",
    },
    {
        id: "53",
        name: "Asa Gottlieb",
        email: "Carolyne.Langosh@yahoo.com",
    },
    {
        id: "54",
        name: "Avery Nienow",
        email: "Hudson_Bernhard47@yahoo.com",
    },
    {
        id: "55",
        name: "Dr. Katrine Ryan",
        email: "Colten40@gmail.com",
    },
    {
        id: "56",
        name: "Florida Kulas",
        email: "Alejandra_Bernhard@yahoo.com",
    },
    {
        id: "57",
        name: "Mauricio Gerlach",
        email: "Vincenza_Gusikowski84@hotmail.com",
    },
    {
        id: "58",
        name: "Chadrick Simonis",
        email: "Reymundo.Doyle@gmail.com",
    },
    {
        id: "59",
        name: "Beau Jenkins",
        email: "Cletus65@hotmail.com",
    },
    {
        id: "60",
        name: "Camilla Cole",
        email: "Eda48@yahoo.com",
    },
    {
        id: "61",
        name: "Abagail MacGyver",
        email: "Jevon.Koch@hotmail.com",
    },
    {
        id: "62",
        name: "Ludwig Prohaska",
        email: "Eldon_DuBuque37@yahoo.com",
    },
    {
        id: "63",
        name: "Berenice Hane",
        email: "Lonnie3@gmail.com",
    },
    {
        id: "64",
        name: "Abel Durgan",
        email: "Marlee.Weimann42@gmail.com",
    },
    {
        id: "65",
        name: "Tate Kuhlman",
        email: "Hope31@yahoo.com",
    },
    {
        id: "66",
        name: "Mrs. Hermina Daniel",
        email: "Murphy59@yahoo.com",
    },
    {
        id: "67",
        name: "Marcelino Nienow",
        email: "Estefania_Dibbert97@hotmail.com",
    },
    {
        id: "68",
        name: "Raphaelle Connelly",
        email: "Josie.Legros70@yahoo.com",
    },
    {
        id: "69",
        name: "Mina Heaney",
        email: "Pete.Hermann79@hotmail.com",
    },
    {
        id: "70",
        name: "Jaida Torp",
        email: "Jonatan82@yahoo.com",
    },
    {
        id: "71",
        name: "Megane Fadel",
        email: "Dandre82@yahoo.com",
    },
    {
        id: "72",
        name: "Angelo Schimmel V",
        email: "Frederic54@hotmail.com",
    },
    {
        id: "73",
        name: "Jaren Ferry DDS",
        email: "Kristian.Kilback@yahoo.com",
    },
    {
        id: "74",
        name: "Annette O'Connell",
        email: "Domenica.Christiansen@gmail.com",
    },
    {
        id: "75",
        name: "Elenor Rohan PhD",
        email: "Alvera.Huel48@yahoo.com",
    },
    {
        id: "76",
        name: "Linnie Beier",
        email: "Reece_Berge@gmail.com",
    },
    {
        id: "77",
        name: "Maybelle Lehner",
        email: "Arlo.Hagenes@gmail.com",
    },
    {
        id: "78",
        name: "Hailie Haag",
        email: "Edythe.Lind59@hotmail.com",
    },
    {
        id: "79",
        name: "Marcelina Schuppe",
        email: "Kip.Cummerata77@gmail.com",
    },
    {
        id: "80",
        name: "Ezra Lang",
        email: "Garret.Swaniawski@hotmail.com",
    },
    {
        id: "81",
        name: "Carey Kiehn",
        email: "Sabrina70@gmail.com",
    },
    {
        id: "82",
        name: "Carole Aufderhar",
        email: "Efrain.Schamberger77@hotmail.com",
    },
    {
        id: "83",
        name: "Fanny Beatty",
        email: "Ewald28@yahoo.com",
    },
    {
        id: "84",
        name: "Mina Lubowitz",
        email: "Vincenzo.Herman@gmail.com",
    },
    {
        id: "85",
        name: "Anabelle Thiel",
        email: "Amely.Renner@hotmail.com",
    },
    {
        id: "86",
        name: "Gerry Homenick",
        email: "Ada_Von54@hotmail.com",
    },
    {
        id: "87",
        name: "Domenico Maggio",
        email: "Freeman.Stamm@yahoo.com",
    },
    {
        id: "88",
        name: "Mauricio Bradtke III",
        email: "Alford83@yahoo.com",
    },
    {
        id: "89",
        name: "Bulah Yost III",
        email: "Nicolas_Schimmel6@yahoo.com",
    },
    {
        id: "90",
        name: "Orville Dibbert DDS",
        email: "Bryana_Herzog@yahoo.com",
    },
    {
        id: "91",
        name: "Autumn Osinski",
        email: "Davin8@hotmail.com",
    },
    {
        id: "92",
        name: "Levi Gibson",
        email: "Deangelo69@gmail.com",
    },
    {
        id: "93",
        name: "Reva McKenzie",
        email: "Bret40@hotmail.com",
    },
    {
        id: "94",
        name: "Jensen Pfannerstill",
        email: "Dax_Marquardt@hotmail.com",
    },
    {
        id: "95",
        name: "Tyrese Larson MD",
        email: "Cecelia85@yahoo.com",
    },
    {
        id: "96",
        name: "Dayne Sanford",
        email: "Tyrique_Waters16@hotmail.com",
    },
    {
        id: "97",
        name: "Jeramy Steuber",
        email: "Catalina.Stehr24@yahoo.com",
    },
    {
        id: "98",
        name: "Madge Bogisich",
        email: "Joey.Marquardt50@gmail.com",
    },
    {
        id: "99",
        name: "Casimer MacGyver",
        email: "Julius.Bednar96@yahoo.com",
    },
    {
        id: "100",
        name: "Arlene Kassulke",
        email: "Josiane_Smith@yahoo.com",
    },
];

var num = 5;

var prev = document.createElement("button");
prev.setAttribute("class", "innnerButton editBtn");
prev.setAttribute("id", "prev");
prev.innerText = "prev";
forButton.appendChild(prev);

for (i = 0; i < 5; i++) {
    let tempButton = document.createElement("button");
    tempButton.setAttribute("class", "innerButton btnss editButton");
    tempButton.innerText = i + 1;
    forButton.appendChild(tempButton);
}

var next = document.createElement("button");
next.setAttribute("class", "innnerButton editBtn");
next.setAttribute("id", "next");
next.innerText = "next";
forButton.appendChild(next);

for (i = 0; i < num; i++) {
    var temp1 = document.createElement("div");
    temp1.setAttribute("class", "margin-top border-bottom innerData");
    var tempemail = document.createElement("div");
    tempemail.innerText = data[i].email;
    var tempname = document.createElement("div");
    tempname.innerText = data[i].name;
    var tempid = document.createElement("div");
    tempid.innerText = data[i].id;
    temp1.appendChild(tempemail);
    temp1.appendChild(tempname);
    temp1.appendChild(tempid);
    forData.appendChild(temp1);
}
prev.setAttribute("disabled", "");
divDrop.addEventListener("change", () => {
    changeData(dropDown.value);
    resetButton();
    checkNextPrev();
    removeDisableAttr();
});

function changeData(num) {
    var dataNodes = document.getElementsByClassName("innerData");
    while (dataNodes.length != 0) {
        forData.removeChild(dataNodes[0]);
    }
    for (i = 0; i < num; i++) {
        var temp1 = document.createElement("div");
        temp1.setAttribute("class", "margin-top border-bottom innerData");
        var tempemail = document.createElement("div");
        tempemail.innerText = data[i].email;
        var tempname = document.createElement("div");
        tempname.innerText = data[i].name;
        var tempid = document.createElement("div");
        tempid.innerText = data[i].id;
        temp1.appendChild(tempemail);
        temp1.appendChild(tempname);
        temp1.appendChild(tempid);
        forData.appendChild(temp1);
    }
}

tempButtons = document.querySelectorAll(".btnss");
tempButtons.forEach((item) => {
    item.addEventListener("click", () => {
        var tempData = item.innerText;
        var dataNodes = document.getElementsByClassName("innerData");
        while (dataNodes.length != 0) {
            forData.removeChild(dataNodes[0]);
        }
        for (
            i = parseInt(tempData) * dropDown.value - dropDown.value;
            i < parseInt(tempData) * dropDown.value && i < data.length;
            i++
        ) {
            var temp1 = document.createElement("div");
            temp1.setAttribute("class", "margin-top border-bottom innerData");
            var tempemail = document.createElement("div");
            tempemail.innerText = data[i].email;
            var tempname = document.createElement("div");
            tempname.innerText = data[i].name;
            var tempid = document.createElement("div");
            tempid.innerText = data[i].id;
            temp1.appendChild(tempemail);
            temp1.appendChild(tempname);
            temp1.appendChild(tempid);
            forData.appendChild(temp1);
        }
    });
});

next.addEventListener("click", () => {
    var lastNodeValue = parseInt(tempButtons[tempButtons.length - 1].innerText);
    var ButtonCount = noOfButtons();
    for (i in tempButtons) {
        tempButtons[i].innerText = lastNodeValue + parseInt(i) + 1;
        if (tempButtons[i].innerText > ButtonCount) {
            tempButtons[i].setAttribute("disabled", "");
        }
        checkNextPrev();
    }
});

prev.addEventListener("click", () => {
    var firstNodeValue = parseInt(tempButtons[0].innerText);
    tempButtons.forEach((item) => {
        item.removeAttribute("disabled");
        item.innerText = parseInt(item.innerText) - 5;

        checkNextPrev();
    });
});

function noOfButtons() {
    return Math.ceil(data.length / dropDown.value);
}

function checkNextPrev() {
    var firstElement = tempButtons[0].innerText;
    var lastElement = tempButtons[4].innerText;
    var possibleButton = noOfButtons();
    if (parseInt(firstElement) == 1) {
        prev.setAttribute("disabled", "");
    } else {
        prev.removeAttribute("disabled");
    }
    if (parseInt(lastElement) >= possibleButton) {
        next.setAttribute("disabled", "");
    } else {
        next.removeAttribute("disabled");
    }
}
function resetButton() {
    for (i in tempButtons) {
        tempButtons[i].innerText = parseInt(i) + 1;
    }
}
function removeDisableAttr() {
    tempButtons.forEach((item) => {
        item.removeAttribute("disabled");
    });
}
