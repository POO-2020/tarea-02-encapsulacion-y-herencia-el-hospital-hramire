// debe resibir los parametros mediante un objeto
export default class Paciente{
    constructor({nombre,fechaDeNacimiento,telefono}){
        super()
        
        this._nombre = nombre 
        this._fechaDeNacimiento = fechaDeNacimiento
        this._telefono = telefono
    }
    getPerfil(){
        return (`${this._nombre.getNombreCompleto()},${this._fechaDeNacimiento.getFecha()}, ${this._telefono}`)
        
    }
}
/*
{
    nombre:"Ramon",

}
*/