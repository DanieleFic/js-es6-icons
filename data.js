const schede =[
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'indigo'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'indigo'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'indigo'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'indigo'
	}
];

console.log("ciao")

//creo una function che mi crea i post
function creazioneSchede( schede ){
    document.querySelector(".row").innerHTML +=
    `<div class="col-2 mx-5 py-3">
		<div class="p-2  rounded bg-light border border-dark d-flex flex-column align-items-center justify-content-center">
			<i class="${schede.family} ${schede.prefix}${schede.name}" style="color:${schede.color}"></i>
			<span>${schede.name}</span> 
		</div>
  	</div> `           
  }

//faccio comparire le schede nel DOM tramite un ciclo for usando una function
for(let i=0; i < schede.length; i++){
	creazioneSchede( schede[i] )
}



/*Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone
(animal, vegetable, user). 
Quando l’utente seleziona un tipo dalla select, 
visualizzare solamente le icone corrispondenti.*/

//funzione che prende ti prende il value del select del DOM

/*function myFunction() { 
	let scelta = document.getElementById("schede").value; 
	console.log(scelta);
}

document.getElementById("schede").addEventListener("change", myFunction);


/*if(scelta == "tutto"){
	//schede.forEach((element, index, array) => console.log(element, index, array))
	console.log("oooooo")
}*/

const selectElement = document.getElementById('schede');

selectElement.addEventListener('change', (event) => {
	console.log(event.target.value);
	let scelta = event.target.value;
	if(scelta == "tutto"){
		
		console.log("Hai scelto tutto")
	}else if (scelta == "Animal"){
		console.log("Hai scelto Animal")
	}else if (scelta == "Vegetables"){
		console.log("Hai scelto Vegetables")
	}else if (scelta == "User"){
		console.log("Hai scelto User")
	}
});




















/*if(scelta == "facile"){
        for(i=1; i<=100; i++){
            caselle.innerHTML += `<div class="quadrato col-1 item-${i}">${i}</div>`;
        }

    }else if(scelta == "media"){
        for(i=1; i<=81; i++){
            caselle.innerHTML += `<div class="quadrato col-1 item-${i}">${i}</div>`;
        }
    }else{
        for(i=1; i<=49; i++){
        caselle.innerHTML += `<div class="quadrato col-1 item-${i}">${i}</div>`;
        }
    }*/