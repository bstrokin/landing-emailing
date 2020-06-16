mobileNav = document.querySelector(".navigation-mobile-container");


function toggleBurger(){
    mobileNav.classList.toggle("display-no");
}


upNavBar = document.querySelector(".up-nav-container");
navBarMobile = document.querySelector(".navigation-mobile");
navBarDesktop = document.querySelector(".navigation-desktop");

upNavBar.addEventListener("mouseover", function(){
    navBarMobile.classList.add("background");
    navBarDesktop.classList.add("background");
});
upNavBar.addEventListener("mouseout", function(){
    navBarMobile.classList.remove("background");
    navBarDesktop.classList.remove("background");
});


popupWrapper = document.querySelector(".popup-wrapper");
popupContainer = document.querySelector(".popup-container");
bleu = "#045696";
rouge = "#AE1622";
jaune = "#ED9914";
var specialite = "";

function showPopup(color){
    popupWrapper.classList.toggle("display-flex");
    popupContainer.style.backgroundColor = color;

    if (color === rouge){
        specialite = "Développement";
    }
    else if (color === bleu){
        specialite = "Design";
    }
    else if (color === jaune){
        specialite = "Marketing";
    }
}

function closePopup(){
    popupWrapper.classList.remove("display-flex");
}

function sendData(){
    confirmation.innerHTML = civilite.value + ` ` + prenom.value + ` ` + nom.value +  `, nous avons
    bien pris en compte votre demande pour la spécialité ` + specialite + `, vous recevrez une réponse
    sur l'adresse ` + email.value + `. Merci de votre confiance.`;
    confirmation.classList.add("display-yes");
    var link = `mailto:` + email.value
             + `?cc=newsletter@bstrokin.fr`
             + `&subject= Demande pour la spécialité : ` + specialite
             + `&body=` + civilite.value + ` ` + prenom.value + ` ` + nom.value +  `, nous avons
                bien pris en compte votre demande pour la spécialité ` + specialite + `, vous recevrez une réponse
                sur l'adresse ` + email.value + `. Merci de votre confiance.`
    ;

    window.location.href = link;

}


/*Création dynamique du formulaire*/
/*Création dynamique du formulaire*/
/*Création dynamique du formulaire*/
let popupForm = document.createElement("form");
let civilite = document.createElement("input");
let nom = document.createElement("input");
let prenom = document.createElement("input");
let email = document.createElement("input");
let telephone = document.createElement("input");
let envoyer = document.createElement("input");

let confirmation = document.querySelector(".confirmation");

popupForm.classList.add("popup-form");
popupForm.setAttribute("method", "POST");
popupForm.setAttribute("action", "");
popupForm.addEventListener("submit", function(event){
    event.preventDefault();
    closePopup();
    sendData(); 
})

civilite.setAttribute("type", "text");
civilite.setAttribute("placeholder", "Monsieur ou Madame");

nom.setAttribute("type", "text");
nom.setAttribute("placeholder", "Nom");

prenom.setAttribute("type", "text");
prenom.setAttribute("placeholder", "Prénom");

email.setAttribute("type", "email");
email.setAttribute("placeholder", "Adresse email");

telephone.setAttribute("type", "text");
telephone.setAttribute("placeholder", "Numéro de téléphone");

envoyer.setAttribute("type", "submit");

popupContainer.appendChild(popupForm);
popupForm.appendChild(civilite);
popupForm.appendChild(nom);
popupForm.appendChild(prenom);
popupForm.appendChild(email);
popupForm.appendChild(telephone);
popupForm.appendChild(envoyer);