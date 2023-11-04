let data = new Date()
// let hora = data.getHours()
let hora = window.prompt('Que horas são???')

                                                   
let msg = document.getElementById('msg')
let img = document.getElementById('foto')
let corpo = document.getElementsByTagName('body')

let manhã = 'https://st.depositphotos.com/2857143/4842/i/450/depositphotos_48420437-stock-photo-beautiful-sky-on-sunset-or.jpg'
let tarde = 'https://media.istockphoto.com/id/1172427455/pt/foto/beautiful-sunset-over-the-tropical-sea.jpg?s=612x612&w=0&k=20&c=fF3fMwiEVD66NhLTJoi3mQ_TXYlW0Rc4yEX8iTkqWZs=' 
let noite = 'https://media.istockphoto.com/id/532378051/pt/foto/c%C3%A9u-de-noite-com-estrelas-e-nuvens.jpg?s=612x612&w=0&k=20&c=mhcc45q09y1kzKUSby5ZOk-RQ4b10zXKHoCwQh9L-Kc='

msg.innerHTML = `Agora sâo exatamente ${hora} horas.`

if (hora >= 4 && hora <12)
{
    corpo[0].style.background = '#ef9e2d'
    img.src = manhã

}
else if (hora <= 18)
{
    corpo[0].style.background = '#ee5412'
    img.src = tarde

}
else
{
    corpo[0].style.background = '#002a36'
    img.src = noite

}