function cuenta(){

    let cadenas = document.getElementById("texts").value;

        var num = 0;
      
        Array.prototype.forEach.call( cadenas, function( val ) {

           if(( val.charCodeAt( 0 ) > 47 ) && ( val.charCodeAt( 0 ) < 58 )){
              
                    num += 1;
                }

                else {

                    num += 0;
                }

                document.getElementById("poss").innerHTML = num + " " + "numeros";
                console.log(num);

        });
}