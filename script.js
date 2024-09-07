var hicon = document.querySelector(".hert");
var overlay = document.querySelector(".overlay");
var signin = document.querySelector(".signin");
var title = document.querySelector("title");

hicon.addEventListener("click", () => {
    hicon.innerHTML = "<img src='./img/pngegg.png'>";

    overlay.style.display = "block";
    signin.style.display = "block";
    title.textContent = "Saboothree Sign-in";
}
)

var cancel = document.getElementById("cancel");

cancel.addEventListener("click", () => {
    overlay.style.display = "none";
    signin.style.display = "none";
    hicon.innerHTML = "<img src='./img/love.png'>";
    title.textContent = "Saboothree";
});

var signin2 = document.querySelector("#log1 li");

signin2.addEventListener("click", () => {
    overlay.style.display = "block";
    signin.style.display = "block";
    title.textContent = "Saboothree Sign-in";
});

var facebook = document.querySelector(".facebook");
var google = document.querySelector(".google");

facebook.addEventListener("click", () => {
    window.location.href = "https://www.facebook.com/login/";
});

google.addEventListener("click", () => {
    window.location.href = "https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F&ec=GAlAwAE&hl=en&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S252499031%3A1720155320303624&ddm=0";
});

var checklist = document.querySelector(".check");
var orederlist = document.querySelector(".orederlist");
var body1 = document.querySelector(".fa");

checklist.addEventListener("mouseover", () => {
    orederlist.style.display = "block";
});

body1.addEventListener("mouseover", () => {
    orederlist.style.display = "none";
});






var moveimg = document.getElementById("move");

moveimg.addEventListener("click", function () {
    var carda = document.querySelector(".sec1");
    var ndata = carda.querySelector(".des");
    carda.style.background = "linear-gradient(to right, #2080c0 0%,white 50%, #2080c0 100%)";
    carda.style.backgroundSize = " 500% 500%";
    carda.style.animation = "posit 4s ease infinite"
    carda.style.backgroundRepeat = "no-repeat";
    carda.style.height = "auto";
    carda.style.position = "relative";
    carda.style.transition = "all 0.7s ease";
    ndata.style.display = "none";

    var ndiv = document.createElement("div");
    ndiv.setAttribute("class", "hii");

    ndiv.innerHTML = `<img src="./img/perf.png" alt="">
    
    <h1 >Discover Your Signature Fragrance</h1>
    <p> Repellendus deserunt obcaecati, quia repudiandae ut tempore non in odit, iure quam aliquam porro? Incidunt magnam aliquid ipsum in amet enim perferendis ex repudiandae rem cum qui inventore deserunt   nostrum suscipit earum temporibus</p>
    <button>For more >></button>
    
     `
        ;
    ndiv.style.transition = "all 2s ease";


    carda.appendChild(ndiv);


});


var menu = document.querySelector(".ad");
var dismenu = document.querySelector(".searc ul");
var dismenu2= document.querySelector("#log1");


menu.addEventListener("click", function () {
    if (dismenu.style.transform == "translateX(200px)") {
        dismenu.style.transform = "translateX(0px)";
    } else {
        dismenu.style.transform = "translateX(200px)";
    }

    if (dismenu2.style.transform == "translateX(200px)") {
        dismenu2.style.transform = "translateX(0px)";
    } else {
        dismenu2.style.transform = "translateX(200px)";
    }
});




// Combined variables for selecting elements----------------------------------------------------------

var cards = document.querySelectorAll(".card");
var cars = document.querySelectorAll(".car");
var card4 = document.querySelectorAll(".card4");

function finditem(event) {
    var searchValue = event.target.value.toUpperCase();
    var isItemFound = false; // Track if any item is found

    // Process cards
    for (var j = 0; j < cards.length; j++) {
        var headings = cards[j].querySelectorAll("h3");
        var cardFound = false;

        for (var i = 0; i < headings.length; i++) {
            if (headings[i].textContent.toUpperCase().indexOf(searchValue) >= 0) {
                headings[i].parentNode.style.display = "block";
                cardFound = true;
                isItemFound = true;
            } else {
                headings[i].parentNode.style.display = "none";
            }
        }

        if (!cardFound) {
            document.querySelector('.card1').style.display = "none";
            document.querySelector('.sec1').style.display = "none";
        } else {
            document.querySelector('.notfound').style.display = "none";
        }
    }

    // Process cars
    for (var j = 0; j < cars.length; j++) {
        var headings = cars[j].querySelectorAll("h3");
        var carFound = false;

        for (var i = 0; i < headings.length; i++) {
            if (headings[i].textContent.toUpperCase().indexOf(searchValue) >= 0) {
                headings[i].parentNode.style.display = "block";
                carFound = true;
                isItemFound = true;
            } else {
                headings[i].parentNode.style.display = "none";
                document.querySelector('.sec4').style.backgroundColor = "#eeeeee";
            }
        }
        console.log(carFound);

        if (!carFound) {
            document.querySelector('.card2').style.display = "none";
            document.querySelector('.sec1').style.display = "none";
        } else {
            document.querySelector('.notfound').style.display = "none";
            
        }
    }

     // Process card4

     for (var j = 0; j < card4.length; j++) {
        var headings = card4[j].querySelectorAll("h3");
        var card4Found = false;

        for (var i = 0; i < headings.length; i++) {
            if (headings[i].textContent.toUpperCase().indexOf(searchValue) >= 0) {
                headings[i].parentNode.style.display = "block";
                card4Found = true;
                isItemFound = true;
            } else {
                headings[i].parentNode.style.display = "none";
            }
        }

        if (!card4Found) {
            document.querySelector('.card5').style.display = "none";
            document.querySelector('.sec1').style.display = "none";
        } else {
            document.querySelector('.notfound').style.display = "none";
        }
    }

    // Update visibility of sections based on search results
    if (isItemFound) {
        document.querySelector('.notfound').style.display = "none";
        document.querySelector('.sec2').style.display = "flex";
        document.querySelector('.sec4').style.display = "flex";
        document.querySelector('.sec5').style.display = "flex";
        
    } else {
        document.querySelector('.notfound').style.display = "flex";
        document.querySelector('.sec1').style.display = "none";
        document.querySelector('.sec2').style.display = "none";
        document.querySelector('.sec4').style.display = "none";
        document.querySelector('.sec5').style.display = "none";

    }
}

function reset() {
    // Reset cards
    for (var j = 0; j < cards.length; j++) {
        var headings = cards[j].querySelectorAll("h3");
        for (var i = 0; i < headings.length; i++) {
            headings[i].parentNode.style.display = "block";
        }
    }

    // Reset cars
    for (var j = 0; j < cars.length; j++) {
        var headings = cars[j].querySelectorAll("h3");
        for (var i = 0; i < headings.length; i++) {
            headings[i].parentNode.style.display = "block";
        }
    }

    // Reset card4
    for (var j = 0; j < card4.length; j++) {
        var headings = card4[j].querySelectorAll("h3");
        for (var i = 0; i < headings.length; i++) {
            headings[i].parentNode.style.display = "block";
        }
    }

    document.querySelector('.sec1').style.display = "block";
    document.querySelector('.sec2').style.display = "flex";
    document.querySelector('.sec4').style.display = "flex";
    document.querySelector('.card1').style.display = "flex";
    document.querySelector('.card2').style.display = "flex";
    document.querySelector('.card5').style.display = "flex";
    document.querySelector('.sec5').style.display = "flex";
    document.querySelector('.notfound').style.display = "none";
    document.querySelector('.sec4').style.backgroundColor = "grey";
}


// var diva1 = document.querySelectorAll(".car");

// function finditem(event) {
//     var entervalue = event.target.value.toUpperCase();
//     var point = 0;  // Reset point for each search

//     for (var j = 0; j < diva1.length; j++) {
//         var headtag = diva1[j].querySelectorAll("h3");
//         var found = false;

//         for (var i = 0; i < headtag.length; i++) {
//             if (headtag[i].textContent.toUpperCase().indexOf(entervalue) >= 0) {
//                 headtag[i].parentNode.style.display = "block";

//                 found = true;
//                 point = 1;
//             } else {
//                 headtag[i].parentNode.style.display = "none";
//                 var perfumy = document.querySelector(".card2");
//                 perfumy.style.display = "none";
//             }
//         }
//         console.log(found);

//         if (!found) {
//             document.querySelector('.notfound').style.display = "flex";
//             document.querySelector('.sec4').style.display = "none";
//             document.querySelector('.sec1').style.display = "none";
//             document.querySelector('.sec2').style.display = "none";
//         } else {
//             document.querySelector('.notfound').style.display = "none";
//             document.querySelector('.sec4').style.display = "flex";
//         }
//     }

//     if (point === 0) {
//         document.querySelector('.notfound').style.display = "flex";
//         document.querySelector('.sec4').style.display = "none";
//         document.querySelector('.sec1').style.display = "none";
//         document.querySelector('.sec2').style.display = "none";

//     } else {
//         document.querySelector('.notfound').style.display = "none";
//         document.querySelector('.sec4').style.display = "flex";
//     }
// }

// function reset() {
//     for (var j = 0; j < div1.length; j++){
//         var headtag = div1[j].querySelectorAll("h3");
//         document.querySelector('.sec1').style.display = "block";
//         document.querySelector('.notfound').style.display = "none";
//         document.querySelector('.sec4').style.display = "flex";
//         document.querySelector(".card2").style.display = "flex";
//         document.querySelector('.sec2').style.display = "flex";

//         for (var i = 0; i < headtag.length; i++) {
//             headtag[i].parentNode.style.display = "block";
//         }
//     }
// }


//-------------------------------------------------------------------------------------------------;ldcf gnmkjnchkjg-

// next


