class Objeto{
    constructor(nombre, material){
        this.nombre = nombre;
        this.material = material;
    }

    mostrarEstadisticas(){
        document.getElementById("estadisticas__container").style.display = 'inline'
        document.getElementById('nombre').innerText = this.nombre
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
    100
)

document.getElementById('espada').addEventListener('click', () => {
    espadaDiamante.mostrarEstadisticas()
})