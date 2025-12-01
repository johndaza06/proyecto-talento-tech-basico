
const doc = "info/Copia de 02_modern-renewable-energy-consumption.csv";

async function carga_documento() {
    try {
        const tbody = document.getElementById("cuerpo"); 
        const titulos = document.querySelector("#encabezado");

        const datos = await fetch(doc);
        if (!datos.ok) throw new Error("No se pudo cargar el CSV: " + datos.statusText);
        const texto = await datos.text();

       
        let separador = texto.split("\n").map(line => line.replace(/\r$/, ""));
       
        separador = separador.filter(line => line.trim() !== "");
        if (separador.length === 0) return;

        const encabezado = separador[0].split(",");
       
        titulos.replaceChildren("");
        for (let i = 0; i < encabezado.length; i++) {
            const th = document.createElement("th");
            th.textContent = encabezado[i].trim();
            titulos.appendChild(th);
        }

    
        tbody.replaceChildren("");
        const cuerpo = separador.slice(1);

        cuerpo.forEach((linea) => {
            
            const columnas = linea.split(",");
            const fila = document.createElement("tr");

            columnas.forEach((dato) => {
                const celda = document.createElement("td");
                celda.textContent = dato.trim();
                fila.appendChild(celda);
            });

            tbody.appendChild(fila);
        });

    } catch (error) {
        console.error("Error en carga_documento:", error);
        // muestra en la tabla un mensaje de error
        const titulos = document.querySelector("#encabezado");
        const tbody = document.getElementById("cuerpo");
        titulos.replaceChildren("");
        const th = document.createElement("th");
        th.textContent = "Error al cargar CSV";
        titulos.appendChild(th);
        tbody.replaceChildren("");
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.colSpan = 1;
        td.textContent = error.message;
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
}

carga_documento();
