function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    
    msg.innerHTML = `Agora são ${hora}:${min} `
   
    
    
    if (hora >= 0 && hora < 12) {
    img.src = 'manha1.png'
        //BOM DIA!
    document.body.style.background = '#e2cd9f';
    

    }
    else if (hora >= 12 && hora < 18) {
      //BOA TARDE! 
      img.src = 'tarde.webp' 
      document.body.style.background = 'rgba(145, 60, 11, 0.86)'
    }else {
        //BOA NOITE!
        img.src = 'noite.webp'
        document.body.style.background ='#02110ed7'
        
    }
    msg.addEventListener('click', clicou)
    msg.addEventListener('mouseout', saiu)
}


  function clicou() {

    var msg = document.getElementById('msg')
    var data = new Date()
    var hora =  data.getHours()
    var min = data.getMinutes()

   
    if (hora >= 0 && hora < 12) {

        msg.innerText = 'BOM DIA! ☀️'

    } else if (hora >= 12 && hora < 18) {

        msg.innerText = 'BOA TARDE! 🌤️'

    } else {

        msg.innerText = 'BOA NOITE! 🌙'

    }
} 

function saiu() {

    var msg = document.getElementById('msg')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    
    msg.innerHTML = `Agora são ${hora}:${min}`
}
    

  




