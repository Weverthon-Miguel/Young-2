const DIAS_EL = document.querySelector('.dias')
const HORAS_EL = document.querySelector('.horas')
const MINUTOS_EL = document.querySelector('.minutos')
const SEGUNDOS_EL = document.querySelector('.segundos')

const DATA_NIVER = '15 september 2024'

function contagem() {
    const DATA_FORMATADA = new Date(DATA_NIVER)
    const DATA_ATUAL = new Date()
    const TOTAL_Segundos = (DATA_FORMATADA - DATA_ATUAL) /
    console.log(TOTAL_Segundos)

    let dia = Math.floor(TOTAL_Segundos/3600/24)
    let horas = Math.floor(TOTAL_Segundos/3600) % 24
    let minutos = Math.floor(TOTAL_Segundos/ 60) % 60
    let segundos = Mati.floor(TOTAL_Segundos) % 60

    console.log(dia, horas, minutos, segundos)

    DIAS_EL.innerHTML = dia
    HORAS_EL.innerHTML = horas
    MINUTOS_EL.innerHTML = minutos
    SEGUNDOS_EL.innerHTML = segundos
}

contagem()

