import { Quotation } from "../interfaces/client.ts"

class QuotationController{
    create(req: Quotation, res: Response){
        //Cria a cotação do serviço da fornecedora de serviço para uma cliente a partir do id da cliente e da fornecedora
    }
    show(){
        //Retornar informações da cotação a partir do id
    }
    delete(){
        //Apaga as informações da cotação a partir do id
    }
}

export { QuotationController }