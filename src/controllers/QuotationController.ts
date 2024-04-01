import { Quotation } from "../interfaces/tables.ts"

class QuotationController{
    create(req: Quotation, res: Response){
        //Cria a orçamento do serviço da fornecedora de serviço para uma cliente a partir do id da cliente e da fornecedora
    }
    show(){
        //Retornar informações da orçamento a partir do id
    }
    delete(){
        //Apaga as informações da orçamento a partir do id
    }
}

export { QuotationController }