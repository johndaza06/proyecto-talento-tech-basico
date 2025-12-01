function torta(){
    const ctx = document.getElementById('torta');

    const colores=['#6B9080','#A4C3B2','#CCE3DE','#EAF4F4','#F6FFF8']

    new Chart(ctx, {
        type: 'pie',
        data: {    
            labels: ['Biomasa', 'Solar', 'Viento', 'Hídrica', 'Otras'],
            datasets: [{
                label: 'Cantidad',
                data: [50, 19, 3, 5, 2],
                borderWidth: 3,
                backgroundColor: colores
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

torta();

