import { ServiceTypes } from "../interfaces/tables.ts"

class ServiceTypesController{
    create(req: ServiceTypes, res: Response){
        //Cria tipo de serviço
    }
    index(){
        //Retornar informações de todos os tipos cadastrados agrupados
    }
}

export { ServiceTypesController }