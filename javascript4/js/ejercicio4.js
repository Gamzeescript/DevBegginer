

function factorar(){

    let numero1 = document.getElementById ('num1').value;

    let fact = 1;
 
        for (let i = 1; i <= numero1; i++){ 

            fact *= i;
        }

        document.getElementById("nums").innerHTML= numero1;
        document.getElementById("rec").innerHTML= fact;

}

        
