export default class Hospital {
    constructor(nombre,direccion){
        this.nombre = nombre
        this.direccion = direccion
        this.doctores = []
        this.citas = [] 
    }
    
    registrarDoctor(pepe){
        this.doctores.push(pepe)
    }
    listarDoctor(){
        this.doctores.forEach( (doc,i)=>{
            console.log(`${i+1},${doc.getPerfil()}`)
        })
    }
    registrarCita(x){
        this.citas.push(x)
    }
    listarCita(){
        this.citas.forEach( (y,i)=>{
            console.log(`${i+1},${y.getCita()}`)
        })
    }
}