const SQUARE = ['yellow','blue','red','green'];
const MAX_COMBINATIONS = 10;
var random_combinations = new Array();
var user_combinations = new Array();
var cont = 0;

window.onload = function() {
    for(var n = 0; n < 2; n++) {
        var container = document.createElement("div");
        container.style.display = "flex";
        
        for(var x = 0; x < 2; x++) {
            var color = document.createElement("div");
            color.style.backgroundColor = SQUARE[cont];
            color.style.width = "80px";
            color.style.height = "80px";
            color.setAttribute("id",SQUARE[cont]);
            color.setAttribute("onclick","game(id)");

            container.appendChild(color);
            cont++;
        }
        document.getElementById("Simontitle").appendChild(container);
    }

    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Play"));
    btn.setAttribute("id","play");
    btn.setAttribute("onclick","play(id)");
    document.getElementById("Simontitle").appendChild(btn);
    cont = 0;
}

function play(id) {
    document.getElementById(id).setAttribute("hidden",true);
    generateRandomCombination();
}

function generateRandomCombination() {
    
    if(random_combinations.length == MAX_COMBINATIONS) {
        alert("You've won");
        createRetryBtn();
    } else {
        var random = Math.floor(Math.random() * 4);
        random_combinations.push(SQUARE[random]);
        showRandomCombination();
    }
}

function showRandomCombination() {
    var color = document.getElementById(random_combinations[cont]);

    if(color.style.backgroundColor == random_combinations[cont]) {
        setTimeout(function() {
            color.style.backgroundColor = "white";
        },500);
    }

    if(color.style.backgroundColor == "white") {
        setTimeout(function() {
            color.style.backgroundColor = random_combinations[cont-1];
        },500);
        
        cont++;
    }
    cont < random_combinations.length ? setTimeout(showRandomCombination,500) : '';
}

function game(id) {
    cont = user_combinations.length;
    user_combinations.push(id);

    if(id == random_combinations[cont]) {
        if(user_combinations.length == random_combinations.length) {
            user_combinations = new Array();
            cont = 0;
            generateRandomCombination();
        }
    } else {
        alert("You've lost");
        createRetryBtn();
    }
}

function createRetryBtn() {
    var retry = document.createElement("button");
    retry.setAttribute("onclick","location.reload()");
    retry.appendChild(document.createTextNode("Retry"));
    document.getElementById("Simontitle").appendChild(retry);
}