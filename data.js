const schede =[
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: generaColore(),
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: generaColore(),
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: generaColore(),
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: generaColore(),
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: generaColore(),
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: generaColore(),
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: generaColore(),
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: generaColore(),
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: generaColore(),
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: generaColore(),
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: generaColore(),
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: generaColore(),
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: generaColore(),
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: generaColore(),
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: generaColore(),
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: generaColore(),
	}
];

console.log("ciao")

//creo una function che mi crea i post
function creazioneSchede( schede ){
    document.querySelector(".row").innerHTML +=
    `<div class="col-2 mx-5 py-3">
		<div class="p-2  rounded bg-light border border-dark d-flex flex-column align-items-center justify-content-center">
			<i class="${schede.family} ${schede.prefix}${schede.name} ${schede.type}" style="color:${schede.color}"></i>
			<span>${schede.name}</span> 
		</div>
  	</div> `           
  }

//faccio comparire le schede nel DOM tramite un ciclo for usando una function

//function che cicla gli ogetti dell array e me ne stampa di conseguenza quanti ne sono 
function stampaIcone( arrayIcone ){
	for(let i=0; i < arrayIcone.length; i++){
		creazioneSchede( arrayIcone[i] )
	}
}

//stampo tutte le schede di deafult all apertura della pagina
stampaIcone(schede)

/*Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone
(animal, vegetable, user). 
Quando l’utente seleziona un tipo dalla select, 
visualizzare solamente le icone corrispondenti.*/



const selectElement = document.getElementById('schede');

//faccio un eventlistner che alla scelta dell utente filtra i risultati che devono apparire sul DOM
selectElement.addEventListener('change', (event) => {
	console.log(event.target.value);
	let scelta = event.target.value;
	if(scelta == "tutto"){
		document.querySelector(".row").innerHTML = ""
		stampaIcone( schede )
	}else if (scelta == "Animal"){
		//svuoto il container sul DOM a ogni scelta cosi non si sovrappongono 
		document.querySelector(".row").innerHTML = ""
		//alla scelta Animal filtro gli animali dall array di oggetti e li stampo 
		const resultAnimali = schede.filter(function(animali){
			return (animali.type === "animal")
		});
		//stampo solo gli animali 
		stampaIcone(resultAnimali)
		//e cosi via per le altre scelte 
	}else if (scelta == "Vegetables"){
		document.querySelector(".row").innerHTML = ""
		const resultVegetali = schede.filter(function(vegetali){
			return (vegetali.type === "vegetable")
		});
		stampaIcone(resultVegetali)
		
	}else if (scelta == "User"){
		document.querySelector(".row").innerHTML = ""
		const resultUser = schede.filter(function(user){
			return (user.type === "user")
		});
		stampaIcone(resultUser)
		
	}
});

//funzione per generare colore random 
function generaColore(){
    const simboli = '0123456789ABCDEF';
    let colore = "#";
    for(let i = 0; i <6; i++){
        const posizione = generaRandomNumber(0, simboli.length - 1);
        colore += simboli.charAt(posizione);
    }
    return colore;
}

function generaRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

