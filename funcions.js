function esparell(){
    // Llegim el que han introduit a les variables
    var a = document.getElementById('numero1').value;
    //Passam el text d'a a números (Integer - enter)
    a = parseInt(a);

    if (a%2==0){
        document.getElementById('resposta1Verda').hidden = false;
        document.getElementById('resposta1Vermella').hidden = true;

    }else{
        document.getElementById('resposta1Vermella').hidden = false;
        document.getElementById('resposta1Verda').hidden = true;
    }

}

function divisors() {
    document.getElementById('divisibleper2').hidden = true;
    document.getElementById('divisibleper3').hidden = true;
    document.getElementById('divisibleper6').hidden = true;

    // Llegim el que han introduit a les variables
    var b = document.getElementById('numero2').value;
    //Passam el text d'a a números (Integer - enter)
    b = parseInt(b);
    if (b%2==0){
        document.getElementById('divisibleper2').hidden = false;
    }
    if (b%3==0){
        document.getElementById('divisibleper3').hidden = false;
    }

    if (b%6==0){
        document.getElementById('divisibleper6').hidden = false;
        document.getElementById('divisibleper2').hidden = true;
        document.getElementById('divisibleper3').hidden = true;
    }
}
function valorsentre() {
    let a = document.getElementById('numeroA').value;
    let b = document.getElementById('numeroB').value;
     a = parseInt(a);
     b = parseInt(b);
     let text_valors ="";
     if (a>b) {
         for (let i = a -1; i > b; i--) {
            text_valors += i + " ";
         }

     } else {

         for (let i = a + 1; i < b; i++) {
             text_valors += i + " ";
         }

     }


    document.getElementById('valors').innerHTML = text_valors;
    document.getElementById('valors').hidden =false;
}

function suma(n1,n2) {
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    alert(n1+n2);
}
