const showSolde = document.getElementById('solde');
const inputLabel = document.getElementById('label');
const inputRecette = document.getElementById('recette');
const inputDepense = document.getElementById('depense');
const showTable = document.querySelector('tbody');
const showTotRec = document.getElementById('totRec');
const showTotDep = document.getElementById('totDep');
const btnAdd = document.getElementById('add');


let recettes = 0;
let depenses = 0;
let solde = 0;
let rang = 0;

btnAdd.addEventListener('click',()=>{
    let depense = 0;
    let recette = 0;
    
    if(inputDepense.value || inputRecette.value){
        const newRow = document.createElement('tr');
        newRow.setAttribute('id',`rang${rang}`);

        if(inputDepense.value){
            depense = Number(inputDepense.value);
            depenses += depense;
        }
        if(inputRecette.value){
            recette = Number(inputRecette.value);
            recettes += recette;
        }
        newRow.innerHTML = `<td>${inputLabel.value}</td><td id="rec${rang}">${recette}</td><td id="dep${rang}">${depense}</td><td><button class="supp" id ="${rang}">Supprimer</button></td>`;
        inputLabel.value ='';
        inputDepense.value = '';
        inputRecette.value = '';
        showTable.appendChild(newRow);
        console.log('recette :',recettes,'depense :',depenses);
        showTotDep.innerHTML = recettes;
        showTotRec.innerHTML = depenses;
        solde = recettes - depenses;
        showSolde.innerHTML =`solde : ${solde}`;
        if(solde<0){
            showSolde.classList.add('deficit');
        }else{
            showSolde.classList.remove('deficit');
        }
        rang++;
        const btnSupp = document.querySelectorAll('button.supp');
        console.log(btnSupp);
        btnSupp.forEach((btn) => {
            btn.addEventListener('click',(e)=>{
                let ligne = e.target.id;
                const recSup = Number(document.getElementById(`rec${ligne}`).innerHTML);
                const depSup = Number(document.getElementById(`dep${ligne}`).innerHTML);
                recettes -= recSup;
                depenses -= depSup;
                const rangSup = document.getElementById(`rang${ligne}`)
                rangSup.remove();
                showTotRec.innerHTML = recettes;
                showTotDep.innerHTML = depenses;

            })
        })
    }
})