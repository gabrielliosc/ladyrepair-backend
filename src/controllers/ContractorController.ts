import { Contractor } from "../interfaces/client.ts"

class ContractorController{
    create(req: Contractor, res: Response){
        //Cria usuário da fornecedora de serviço
    }
    index(){
        //Retornar informações de todas as fornecedoras de serviço cadastradas
    }
    show(){
        //Retornar informações da fornecedora de serviço a partir do id
    }
    update(){
        //Atualizar algumas informações da fornecedora de serviço a partir do id
    }
    delete(){
        //Apaga as informações da fornecedora de serviço a partir do id
    }
}

export { ContractorController }