import { Service } from "../interfaces/client.ts"

class ServiceController{
    create(req: Service, res: Response){
        //Cria serviço
    }
    index(){
        //Retornar informações de todos os serviços cadastrados
    }
    show(){
        //Retornar informações do serviço cadastrado a partir do id
    }
    update(){
        //Atualizar algumas informações do serviço cadastrado  a partir do id
    }
    delete(){
        //Apaga as informações do serviço cadastrado  a partir do id
    }
}

export { ServiceController }