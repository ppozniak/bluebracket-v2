export type Category = "web" | "js" | "wp" | "react" | "vue" | "game";

export type Project = {
  name: string;
  description: string;
  tags?: Category[];
  thumbnail: string;
  githubUrl?: string;
  liveUrl?: string;
  popupId?: string; // @TODO: Probably will change
};
