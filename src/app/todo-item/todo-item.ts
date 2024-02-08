import { CommonModule } from "@angular/common";

// on type title en string et on rajout ? pour lui dire attention cela peut-être nul

// export interface todoItem {
    
//     title?: string 

// }

export interface TodoItem {
    
    title?: string 
    completed?: boolean;

}


  // Un exemple comment résoudre le probleme de peut-être nul avec une class avec possibilité de constructeur 
// export class todoItem {

//     title : string =''
// }