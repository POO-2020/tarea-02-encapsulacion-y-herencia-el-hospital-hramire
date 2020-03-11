//El constructor debe recibir los parámetros mediante un objeto
export default class Hospital {
    constructor(nombre,direccion){
        this._nombre = nombre
        this._direccion = direccion
        this._doctores = []
        this._citas = [] 
    }
    
    registrarDoctor(pepe){
        this._doctores.push(pepe)
    }
    buscarDoctor(){

    }
    eliminarDoctor(){

    }
    actualizarDoctor(){

    }
    listarDoctor(){
        this._doctores.forEach( (doc,i)=>{
            console.log(`${i+1},${doc.getPerfil()}`)
        })
    }
    registrarCita(x){
        this._citas.push(x)
    }
    buscarCita(){

    }
    eliminarCita(){

    }
    actualizarCita(){

    }
    listarCita(){
        this._citas.forEach( (y,i)=>{
            console.log(`${i+1},${y.getCita()}`)
        })
    }
}