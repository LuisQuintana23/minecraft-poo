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
    constructor(nombre, material, duracion){
        super(nombre, material);
        this.duracion = duracion;
    }

    atacar(enemigo){
        alert(`Atacando ${enemigo}`)
        //alert("Atacando " + enemigo)
    }
}

class Espada extends Herramienta{
    constructor(nombre, material, duracion, afilado){
        super(nombre, material, duracion);
        this.afilado = afilado;
    }

    // metodo sobrecargado
    cortarTelaraña(objeto){
        alert(typeof objeto)
        if(objeto == "telaraña"){
            alert("Cortando telaraña...")
        } else {
            alert("Esto no es una telaraña")
        }
    }

    cortarTelaraña(){
        alert("Cortando telaraña...")
    }
}



var espadaDiamante = new Espada(
    'Espada de Diamante',
    'Diamante',
    80,
    30
    )

espadaDiamante.cortarTelaraña()
espadaDiamante.atacar()

var hachaHierro = new Herramienta(
    'Hacha de Hierro',
    'Hierro',
    100
)

document.getElementById('espada').addEventListener('click', () => {
    espadaDiamante.mostrarEstadisticas()
})