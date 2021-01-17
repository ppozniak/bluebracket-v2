import { Project } from "./projects.types";
import { Skill } from "./skills.types";

export interface HomePageData {
  allContentfulAbout: AllContentfulAbout;
  allContentfulSkills: AllContentfulSkills;
  allContentfulProject: AllContentfulProject;
}

export interface AllContentfulAbout {
  edges: Edge[];
}

export interface Edge {
  node: EdgeNode;
}

export interface EdgeNode {
  body: Body;
  jobTitle: string;
  greeting: string;
}

export interface Body {
  body: string;
}

export interface AllContentfulProject {
  nodes: Project[];
}

export interface AllContentfulSkills {
  nodes: AllContentfulSkillsNode[];
}

export interface AllContentfulSkillsNode {
  name: string;
  skills: Skill[];
}
