function barra(){
    const ctx = document.getElementById('barra');

    const colores=['#6B9080','#A4C3B2','#CCE3DE','#EAF4F4','#F6FFF8']

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Biomasa', 'Solar', 'Viento', 'Hídrica', 'Otras'],
            datasets: [{
                label: ' ',
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

barra();
