import { AutoreDTO } from "./autore-dto";
import { CategorieDto } from "./categorie-dto";

export class FumettoDto {
  id: number;
  name: string;
  description: string;
  type: string;
  author: AutoreDTO;
  category: CategorieDto;
  photo: any;
}
