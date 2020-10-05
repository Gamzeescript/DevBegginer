function calculo(){



    var nota = document.getElementById("nota1").value;
    var notaglobal = parseFloat(nota);

    

    const aprobado = 6.9;
    const examen = 0.70;

        if(notaglobal < aprobado){

                var resto = aprobado - notaglobal;
                var porcentaje = resto * examen;
            
                document.getElementById("notafinal").innerHTML = porcentaje;

        }

    

        else {

        alert("usted esta aprobado, no necesita de recuperacion");
        document.getElementById("notafinal").innerHTML = notaglobal;

        }
}
    



       


       
