import { CategorieDto } from "./categorie-dto";

export class ListaCategorieDto {
    list?:CategorieDto []; //gli elementi di questo array devono essere ti tipo CateogrieDTO ovvero:
                                                                                                //{
                                                                                            // id:number, name:string, description:string
                                                                                                //}
}