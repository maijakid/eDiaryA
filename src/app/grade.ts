enum enumGrade {neocenjen=0, nedovoljan=1, dovoljan=2, dobar=3, vrlodobar=4, odlican=5}

export class Grade {
  id:number;
  grade:enumGrade;
  comment:string;
  finalGrade:boolean
}
