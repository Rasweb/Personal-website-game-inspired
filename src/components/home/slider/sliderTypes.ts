import { IProject } from "@/types/projectTypes";

export interface IProjectProps {
  firstFive: IProject[];
  loaded: boolean;
  projClicked(id: number, title: string): void;
}
