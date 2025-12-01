function resultado() {

    const valor = document.getElementById("kwh").value;

    const cov = parseFloat(valor)

    const twh = convierte_twh(cov)

    const porcent = 58.19

    const porcentaje = ((twh * 100) / porcent).toFixed(4)

    const res = "Su consumo promedio mensual fue de " + valor + "kwh, lo cual es equivalente al " + porcentaje + "% a la totalidad consumida de la fuente hídrica producida en el país Colombiano con respecto al año 2021";

    if (valor != "" && !isNaN(cov)) {

        Swal.fire({
            title: 'excelente',
            text: res,
            icon: 'success',
            confirmButtonText: 'OK'
        })

        limpia()

    } else {

        Swal.fire({
            title: '¡Error!',
            text: 'no hay datos ingresados',
            icon: 'error',
            confirmButtonText: 'Close'
        })

    }

}

function convierte_twh(dato) {

    return (dato / 1000) * 12

}

function limpia() {

    document.getElementById("kwh").value = ""

}
