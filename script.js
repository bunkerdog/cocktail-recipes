/* Author: Natasha Ayles
this is a javascreipt for a cocktail page
*/

//variables
const cocktailListUrl="www.thecocktaildb.com/api/json/v1/1/search.php?f=a";
const cocktailList=document.getElementById("cocktail-List");
window.addEventListener("load", updateCocktailList );

function getCocktailList(){
    return fetch(cocktailListUrl).then(response => response.json());
}


function updateCocktailList(){
    getCocktailList().then(function(data){
        for (element in data.message){
            let option =createOption(element);
            cocktailList.appendChild(option);
        }
    }

    );
}

function createOption(text){
    let option = document.createElement("option");
    option.textContent=text;
    return option;
}