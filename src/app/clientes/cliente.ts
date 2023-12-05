export class Cliente{

    id: number;
    nombre: string;
    apellido: string;
    createAt: string;
    email: string;

    

    constructor(id:any,nombre: string,apellido: string,createAt: string,email: string){
        this.id= id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.createAt = createAt;
        this.email = email;

    }


    
}