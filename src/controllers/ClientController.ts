import { Client } from "../interfaces/tables.ts"

class ClientController {
    create(req: Client, res: Response){
        //Criar usuário da cliente
    }
    show(){
        //Retornar informações da cliente a partir do id
    }
    update(){
        //Atualizar algumas informações da cliente a partir do id
    }
    delete(){
        //Apaga as informações da cliente a partir do id
    }
}

export { ClientController }