export default class Paciente{
    constructor(nombre,fechaDeNacimiento,telefono){
        this.nombre = nombre 
        this.fechaDeNacimiento = fechaDeNacimiento
        this.telefono = telefono
    }
    getPerfil(){
        return (`${this.nombre.getNombreCompleto()},${this.fechaDeNacimiento.getFecha()}, ${this.telefono}`)
        
    }
}