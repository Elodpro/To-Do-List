//Variables

let addToButton = document.getElementById('add');
let doContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputText');

//Fonctions

//lorsqu'on clique sur le bouton, ca lance la fonction.
addToButton.onclick = function ()
{

    //Si le champs est vide affiche message sinon crée
    if (inputField.value == "")
    {
        alert("Champs vide")
    } else
    {

        let paragraph = document.createElement('p')
        //Prend ce qu'il y a dans l'inputField.
        paragraph.innerText = inputField.value;

        //style pré fais du paragraphe
        paragraph.classList.add('tasks-style');

        //Insère le paragraphe dans le toDoContainer
        doContainer.appendChild(paragraph);

        //vidé l'input quand le paragraphe est ajouté
        inputField.value = "";

        paragraph.onclick = function(){
            paragraph.classList.add('crossed-out');
        }
    }

}
