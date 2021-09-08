function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')
  if (fano.value.length == 0 || fano.value > ano) {
    window.alert('[ERRO] Tente novamente!')
  } 
  else {
    var fsex = document.querySelectorAll('[name="radsex"]')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
      genero = 'Homem'
      if (idade >=0 && idade < 10) {
        //criança
        img.setAttribute('src', './imagens/bebeH.png')
      } else if ( idade > 10 && idade < 22) {
        //jovem
        img.setAttribute('src', './imagens/menino.png')
      } else if (idade < 50) {
        //adulto
        img.setAttribute('src', './imagens/homem.png')
      } else {
        //idoso
        img.setAttribute('src', './imagens/idoso.png')
      }
    } else if (fsex[1].checked) {
      genero = 'Mulher'
      if (idade >=0 && idade < 10) {
        //criança
        img.setAttribute('src', './imagens/bebeM.png')
      } else if ( idade >10 && idade < 22) {
        //jovem
        img.setAttribute('src', './imagens/menina.png')
      } else if (idade <50) {
        //adulto
        img.setAttribute('src', './imagens/mulher.png')
      } else {
        //idoso
        img.setAttribute('src', './imagens/idosa.png')
      }
    }
    res.innerHTML = `detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)

  }
}