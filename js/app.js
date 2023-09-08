class Objeto{
    constructor(nombre, material){
        this.nombre = nombre;
        this.material = material;
    }

    mostrarEstadisticas(){
        document.getElementById("estadisticas__container").style.display = 'inline'
        document.getElementById("herramienta__datos").style.display = 'inline'

        document.getElementById('nombre').innerText = this.nombre
        document.getElementById('Material').innerText = this.material
        document.getElementById('daño').innerText = this.daño
        document.getElementById('Durabilidad').innerText = this.duracion
        document.getElementById('Encantamientos').innerText = this.encantamiento
    }
}

class Herramienta extends Objeto{
    constructor(nombre, material, vidaUtil,daño,encantamiento){
        super(nombre, material);
        this.duracion = vidaUtil;
        this.daño = daño
        this.encantamiento = encantamiento
    }

    soltar(){
        alert(this.nombre+" Se ha soltado ")
        document.getElementById("hacha").style.display="none";
        document.getElementById("estadisticas__container").style.display = 'none'
        document.getElementById("herramienta__datos").style.display = 'none'
    }
    atacar(enemigo){
        alert(`Atacando ${enemigo}`)
        //alert("Atacando " + enemigo)
    }
}

class Espada extends Herramienta{
    constructor(nombre, material, vidaUtil, afilado){
        super(nombre, material, vidaUtil);
        this.afilado = afilado;
    }

    cortarTelaraña(){
        alert("Cortando telaraña sin parametros...")
    }

    // metodo sobrecargado
    cortarTelaraña(objeto){
        alert(typeof objeto)
        if(objeto == "telaraña"){
            alert("Cortando telaraña con parametros...")
        } else {
            alert("Esto no es una telaraña")
        }
    }
}

class Armadura extends Objeto{
    constructor(nombre, material, vidaUtil, proteccion){
        super(nombre, material, vidaUtil);
        this.proteccion = proteccion
    }

    quitar(){
        alert("Quitando " + this.nombre);
        document.getElementById("pantalones").addEventListener.style.display = 'none'
    }
}


var espadaDiamante = new Espada(
    'Espada de Diamante',
    'Diamante',
    80,
    30
    )

/*
espadaDiamante.cortarTelaraña()
espadaDiamante.atacar()
*/

var hachaHierro = new Herramienta(
    'Hacha de Hierro',
    'Hierro',
    100,
    69,
    "Ninguno"

)

document.getElementById('espada').addEventListener('click', () => {
    espadaDiamante.mostrarEstadisticas()
})

document.getElementById('hacha').addEventListener('click', () => {
    hachaHierro.mostrarEstadisticas()
})
document.getElementById('soltar').addEventListener('click', () => {
    hachaHierro.soltar()
})

document.addEventListener("keyup",(evento)=>{
    if (evento.keyCode === 27){
        document.getElementById("estadisticas__container").style.display = 'none'
        document.getElementById("herramienta__datos").style.display = 'none'

        
    }
})