class Objeto{
    constructor(nombre, material){
        this.nombre = nombre;
        this.material = material;
    }

    mostrarEstadisticas(){
        document.getElementById("estadisticas__container").style.display = 'inline'
        document.getElementById('nombre').innerText = this.nombre
        document.getElementById('material').innerText = this.material
    }
}

class Herramienta extends Objeto{
    constructor(nombre, material, vidaUtil){
        super(nombre, material);
        this.duracion = vidaUtil;
    }

    atacar(enemigo){
        alert(`Atacando ${enemigo}`)
        //alert("Atacando " + enemigo)
    }

    mostrarEstadisticas(){
        super.mostrarEstadisticas()
        document.getElementById('durabilidad').innerText = this.duracion

        document.getElementById('herramienta__datos').style.display = 'inline'
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

class Pico extends Herramienta{
    constructor(nombre, material, vidaUtil, dureza){
        super(nombre, material, vidaUtil);
        this.dureza = dureza;
    }

    picar(){
        alert("Picando...")
    }

    mostrarEstadisticas(){
        super.mostrarEstadisticas()
        document.getElementById('dureza').innerText = this.dureza
        document.getElementById('daño').innerText = 1
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
    100
)

var picoOro = new Pico(
    'Pico de Oro',
    'Oro',
    50,
    20
)

document.getElementById('pico').addEventListener('click', () => {
    picoOro.mostrarEstadisticas()
})


document.getElementById('espada').addEventListener('click', () => {
    espadaDiamante.mostrarEstadisticas()
})

