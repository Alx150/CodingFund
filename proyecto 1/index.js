const button = document.getElementById("listo")
button.addEventListener("click", () => {
    while (true) {
        let numero = parseInt(prompt(
            "Digite el tamaño de su matriz"
        ));

        let matriz = [];
        for (let i = 0; i < numero; i++) {
            let array = [];
            for (let n = 0; n < numero; n++) {
                array.push(0)
            }
            matriz.push(array)
        }
        
        let n = 0;
        let inicio = 0;
        let final = numero-1;
        
        while (n < Math.pow(numero, 2)) {
            for (let i = inicio; i <= final; i++) {
                matriz[inicio][i] = n+=1;
            }
            
            for (let i = inicio+1; i <= final; i++) {
                matriz[i][final] = n+=1;
            }
            
            for (let i = final-1; i >= inicio; i--) {
                matriz[final][i] = n+=1;
            }

            for (let i = final-1; i >= inicio+1; i--) {
                matriz[i][inicio] = n+=1;
            }
            
            inicio+=1
            final-=1
        }

        const p = document.getElementById("p");
        
        for (let i = 0; i < matriz.length; i++) {
            document.write(`<p>${matriz[i]}</p>`)
            document.write("<br>")
        } 

        let close = prompt(
            "¿Quiere hacer otra ecuación? (Y/N)"
            )
            
            if (close == "n" || close == "N") {break}
        }
    })
    