import { Recommendation } from "../interfaces/tables.ts"

class RecommendationController {
    create(req: Recommendation, res: Response){
        //Cria uma recomendação
    }
    index(){
        //Retornar informações de todas as recomendações a partir do id da prestadora
    }
    update(){
        //Atualizar algumas informações da recomendação a partir do id
    }
    delete(){
        //Apaga as informações da recomendação a partir do id
    }
}

export { Recommendation }