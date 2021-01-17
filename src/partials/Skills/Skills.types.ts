import { IconName } from "components/Icon";

export type Skill = {
  name: string;
  title?: string;
  iconName: IconName;
};

export type SkillsGroup = {
  name: string;
  skills: Skill[];
};
