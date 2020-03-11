//El constructor debe recibir los parámetros mediante un objeto
export default class Doctor{
    constructor(nombre,especialidad,telefono,cedula){
        this._nombre = nombre
        this._especialidad = especialidad
        this._telefono = telefono
        this._cedula = cedula 
    }
    getPerfil(){
        return(`${this._nombre.getNombreCompleto()}, ${this._especialidad}, ${this._telefono}, ${this._cedula}`)
    }
}