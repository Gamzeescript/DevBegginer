function cartesiano() {

    let numero1 = document.getElementById("num1").value;

    if(numero1 > 0){

        let num1 = parseInt(numero1);


    let arreglo1 = "";


    for(let i = -num1; i <= num1; i++){

        arreglo1 +=  i + " ";
        

        document.getElementById("car1").innerHTML = arreglo1;

       
        console.log(arreglo1);

    

    }


    }

    else {

        alert("numero debe ser mayor a 0");

    }
    

    
}  
    