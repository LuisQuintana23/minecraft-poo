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
        this.vidaUtil = vidaUtil;
    }

    
    quitar(){
        alert("Quitando " + this.nombre);
        document.getElementById("pantalones").addEventListener.style.display = 'none'
    }
}

class Botas extends Armadura{
    constructor(nombre, material, vidaUtil, proteccion, velocidadExtra){
        super(nombre, material, vidaUtil, proteccion);
        this.velocidadExtra = velocidadExtra;
    }
    mostrarEstadisticas(){
        super.mostrarEstadisticas()
        document.getElementById('vidaUtil').innerText = this.vidaUtil
        document.getElementById('proteccion').innerText = this.proteccion
        document.getElementById('herramienta__datos').style.display='none'
        document.getElementById('velocidadExtra').innerText = this.velocidadExtra
    }
}

var botasOro = new Botas('Botas de oro', 'Oro', 40, 60, 0.1);

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

document.getElementById('botas').addEventListener('click', () => {
    botasOro.mostrarEstadisticas()
})