import { IconName } from "components/icon";

export type Skill = {
  name: string;
  title?: string;
  iconName: IconName;
};

export type SkillsGroup = {
  name: string;
  skills: Skill[];
};
