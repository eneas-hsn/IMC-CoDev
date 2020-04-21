function experiencia() {
    if (anose<=1) {
        console.log('Iniciante')
    }
    if (anose>1 && anose<=3) {
        console.log('Intermediario')
    }
    if (anose>3 && anose<=6) {
        console.log('Avançado')
    }
    if (anose>6 ) {
        console.log('Jedi Master')
    }
}
anose=4
console.log(experiencia())