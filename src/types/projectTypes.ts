export interface IProject {
  id: number;
  title: string;
  description: string;
  language: string[];
  img: string;
  link: string;
  dateCreated: string;
}

export interface IGlobalImage {
  src: string;
  alt: string;
  // Optional prop
  customCss?: string;
}
