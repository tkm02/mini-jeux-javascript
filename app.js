const form = document.getElementById('form-User');
const input = document.getElementById("numberUser");
const resultat = document.getElementsByClassName('resultats');
// const logo = document.getElementsByClassName("fa-check-circle");

let randonNumber = Math.floor(Math.random()*10);
console.log(randonNumber);


form.addEventListener("submit", function(e){
    e.preventDefault()
    const valeur=parseInt(input.value);
    if(randonNumber === valeur){
        // resultat.innerText = "Victoire";
        document.getElementById('logo').style.display='block';
        document.getElementById("numberUser").style.display="none"; 
        console.log("gagné");
        input.value="";
        
}
    else{
        // resultat.innerText = "Perdu";
        console.log("perdu");
        input.value="";
        input.classList.add("error");
        input.classList.add("animate__animated","animate__shakeX");
        // input.classList.add('animate__animated animate__bounce');
        setTimeout(function(){
            input.classList.remove('error');
            input.classList.remove("animate__animated","animate__shakeX");

        },1000);
    };
    
    
});
