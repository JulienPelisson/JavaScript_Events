//Fonctionnalité 1

let piedDePage = document.querySelector("footer");
var nbrClick = 1;

piedDePage.addEventListener("click", function(){
	nbrClick ++;
	console.log("clique numéro " + nbrClick);
})

//Fonctionnalité 2

let hamburger = document.querySelector("header").querySelector("button");
var navBar = document.getElementById("navbarHeader");

hamburger.addEventListener("click", function(){
	navBar.classList.toggle("collapse")
})


// Fonctionnalité 3

let voirEnRouge = document.getElementsByClassName("col-md-4")[0].getElementsByTagName("button")[1];

voirEnRouge.addEventListener("click",function(){
	voirEnRouge.style.color = "red"
})





//Fonctionnalité 4

let seMettreAuVert = document.getElementsByClassName("col-md-4")[1];


seMettreAuVert.addEventListener("click", function(){
	if(seMettreAuVert.style.color === 'green'){ 
		seMettreAuVert.style.color = '' ; 
	}else{ 
		seMettreAuVert.style.color = "green";
	}
})

//Fonctionnalité 5

let nucléarisationDesRollers = document.querySelector("header");
let oups = document.querySelector("link")
nucléarisationDesRollers.addEventListener("dblclick", function(){
	if(oups.disabled === true){
		oups.disabled = false;
	}else{
		oups.disabled = true;
	}
})

//Fonctionnalité 6 

let teteReduite = document.querySelector(".col-md-4")	
let reductionTotale = document.querySelector(".col-md-4").getElementsByClassName("btn-success")[0]		
	reductionTotale.addEventListener("mouseover", function(){
		
	})