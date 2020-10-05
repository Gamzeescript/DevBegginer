var myarr= [];
var nums = "";
var arraynum;
var res = 0;

	function procesar() {

            calcularybuscar();
		}        

        function calcularybuscar(){

            for (let i = 2032; i >= 0; i--) {
                
                nums = i.toString();
                
                arraynum = Array.from(nums);

                for (let j = 0; j < arraynum.length; j++) {

                    res += parseFloat(arraynum[j]);

                    if (res == 16) {

                        myarr.push(i);
                    }
                }

                res = 0;

            }
            
            var misdigitos = "["+ myarr +"]";

            document.getElementById("resta").innerHTML = misdigitos;
    }