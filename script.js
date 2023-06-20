console.log("Hello World!");

let data = new Date();

let diasDosMeses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let nomeDoMeses = ['Janeiro',
'Fevereiro',
'Março',
'Abril',
'Maio', 
'Junho',
'Julho',
'Agosto',
'Setembro',
'Outubro',
'Novembro',
'Dezembro',
];

for(let i = 1; i <= diasDosMeses[0]; i++) {
    dias.innerHTML += `<option value="${i}">${i}</option>`;
};  

meses.onchange = function () {
    dias.innerHTML = '';
    for(let i = 1; i <= diasDosMeses[meses.value]; i++) {
        dias.innerHTML += `<option value="${i}">${i}</option>`;
    };
};

for(let i = 0; i < nomeDoMeses.length; i++) {
    meses.innerHTML += `<option value="${i}">${i}</option>`;
};
for(let i = data.getFullYear(); i >= data.getFullYear() - 100; i--) {
    anos.innerHTML += `<option value="${i}">${i}</option>`
};