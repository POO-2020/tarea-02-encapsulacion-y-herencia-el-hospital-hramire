export default class Doctor{
    constructor(nombre,especialidad,telefono,cedula){
        this.nombre = nombre
        this.especialidad = especialidad
        this.telefono = telefono
        this.cedula = cedula 
    }
    getPerfil(){
        return(`${this.nombre.getNombreCompleto()}, ${this.especialidad}, ${this.telefono}, ${this.cedula}`)
    }
}