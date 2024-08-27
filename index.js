function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
    let copiar = document.getElementById("copiar");
    let mensaje = document.getElementById("mensaje");
    let copiarbtn = document.getElementById("copiarbtn");

    let textoCifrado = texto
                        .replace(/e/gi, "enter")
                        .replace(/i/gi, "imes")
                        .replace(/a/gi, "ai")
                        .replace(/o/gi, "ober")
                        .replace(/u/gi, "ufat");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "";
        parrafo.textContent = "";
        muñeco.style.display = "none";


        tituloMensaje.style.display = "none";
        mensaje.textContent = textoCifrado;
        resultado.textContent = "";
        copiar.style.marginTop = "40%";
        parrafo.style.marginTop = "5%";
    }
    else{
        muñeco.src = "./imagenes/muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas cifrar o decifrar"
        copiarbtn.style.display = "none";
        swal("Oooops", "Debes ingresar un texto", "warning");
    }
}

function desencriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
                    .replace(/enter/gi, "e")
                    .replace(/imes/gi, "i")
                    .replace(/ai/gi, "a")
                    .replace(/ober/gi, "o")
                    .replace(/ufat/gi, "u");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "";
      parrafo.textContent = "";
      muñeco.style.display = "none"

      tituloMensaje.style.display = "none";
        mensaje.textContent = textoCifrado;
        resultado.textContent = "";
        copiarbtn.style.marginTop = "40%";
        parrafo.style.marginTop = "5%";
      
    } else {
      muñeco.src = "./imagenes/muñeco.png";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      copiarbtn.style.display = "none";
      swal("Ooops!", "Debes ingresar un texto", "warning");
      
    }
}

function copiar() {
    // Selecciona el elemento textarea que contiene el texto encriptado/desencriptado
    let texto = document.getElementById("texto");

    // Selecciona el texto dentro del textarea
    texto.select();
    texto.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copia el texto seleccionado al portapapeles
    document.execCommand("copy");

    // Opcional: Muestra una alerta que indica que el texto fue copiado
    swal("¡Texto copiado!", "El texto ha sido copiado al portapapeles.", "success");
}
