export interface IProject {
  id: number;
  title: string;
  description: string;
  language: string[];
  img: string;
  link: string;
  dateCreated: string;
}

export interface INavList {
  name: string;
  path: string;
  icon: any;
  id: number;
}
