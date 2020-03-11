//El constructor debe recibir los parámetros mediante un objeto
export default class Cita { 
    constructor(fecha,hora,doctor,paciente){
        this._fecha = fecha 
        this._hora = hora
        this._doctor = doctor
        this._paciente = paciente  
    }
    getCita(){
        return(`${this._fecha.getFecha()} ${this._hora.getFormato24()}, DR ${this._doctor.nombre._apellidoPaterno}, ${this._paciente.getPerfil()}`)
    }
}