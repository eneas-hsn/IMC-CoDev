function onChange() {
    document
        .querySelector('#tabela')
        .classList
        .toggle('hide')
    document
        .querySelector('#container2')
        .classList
        .toggle('hide')
}


function calcularIMC() {
    var massa=document.getElementById('massa').value.replace(',','.')
    var altura=document.getElementById('altura').value.replace(',','.')
    var imc=(massa/altura**2).toFixed(2)
    
    var res=document.getElementById('res')
    var ind=document.getElementById('indice')
    var resimc={
        baixopeso:18.59,
        pesoideal:[24.99],
        acimadopeso:[29.99],
        obeso1:[34.99],
        obeso2:[39.99],
        obeso3:40
    }
    if (massa=='' || altura=='') {
        return alert('Preencha os campos corretamente')
    } else{
        res.innerHTML=`Seu IMC é ${imc}`
    }
    if (imc<= resimc.baixopeso) {
        ind.innerHTML=`Você está abaixo do peso`
    }
    else if (imc>resimc.baixopeso && imc<=resimc.pesoideal) {
        ind.innerHTML=`Você está no peso ideal`
    }
    else if (imc>resimc.pesoideal && imc<=resimc.acimadopeso) {
        ind.innerHTML=`Você está acima do peso`
    }
    else if (imc>resimc.acimadopeso && imc<=resimc.obeso1) {
        ind.innerHTML=`Você está no indice do obesidade I`
    }
    else if (imc>resimc.obeso1 && imc<=resimc.obeso2) {
        ind.innerHTML=`Você está no grau de obesidade II`
    }
    else if (imc>resimc.obeso2) {
        ind.innerHTML=`Você está no grau de obesidade III`
    }
    document.getElementById('massa').value=''
    document.getElementById('altura').value=''

}