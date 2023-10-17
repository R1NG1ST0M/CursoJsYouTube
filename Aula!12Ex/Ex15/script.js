function verificar(){
    var data =new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value)>ano){
        window.alert('[ERRO] Verficar os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero =''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade<10){
                img.setAttribute('src', 'img/homemcrianca.jpg')
            }else if(idade<21){
                img.setAttribute('src', 'img/homemjovem.jpg')        
            }else if(idade<50){
                img.setAttribute('src', 'img/homemadulto.jpg')            
            }else{
                img.setAttribute('src', 'img/homemvelho.jpg')                
            }   
        }else if(fsex[1].checked){            
            genero = 'Mulher'
            if(idade<10){                
                img.setAttribute('src', 'img/mulhercrianca.jpg')
            }else if(idade<21){                
                img.setAttribute('src', 'img/mulherjovem.jpg')
            }else if(idade<50){                
                img.setAttribute('src', 'img/mulheradulta.jpg')
            }else{                
                img.setAttribute('src', 'img/mulhervelha.jpg')
            }   
        }
        res.style.textAlign='center'
        res.innerHTML=`Detectamos ${genero} com ${idade} anos.<p>`
        res.appendChild(img)
    }
}