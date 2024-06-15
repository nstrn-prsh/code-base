export type Icells = {
   selected: boolean;
   day: string;
   dayVal: string;
   hour: string;
   hourVal: string;
   gridArea: string;
   inspectorSelect?: boolean;
};

export type Irows = {
   day?: string;
   fullDay?: any;
   hour: string;
   gridArea: string;
};

export type Icolumns = {
   day: string;
   date?: any; //note:
   fullDay: string;
   gridArea: string;
};

/*  save data
"days": {
  "1": ["14","15","16","17","18","19"],
  "2": ["14","15","16","17","18","19"],
  "3": ["14","15","16","17","18","19"],
  "4": ["14","15","16","17","18","19"],
  "5": ["14","15","16","17","18","19"],
} */