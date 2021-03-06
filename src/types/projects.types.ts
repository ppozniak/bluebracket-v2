import { ContentfulRichTextGatsbyReference } from "gatsby-source-contentful/rich-text";

export type Category = "web" | "js" | "wp" | "react" | "vue" | "game" | "node";

export interface Project {
  description: string;
  githubUrl?: string;
  name: string;
  tags?: Category[];
  content?: Content;
  media?: Media[];
  thumbnail?: string;
  liveUrl?: string;

  type?: "personal" | string;
  timePeriod?: string;
  scope?: string;
  stack?: string;
}

export interface Content extends ContentfulRichTextGatsbyReference {
  raw: string;
  references: any;
}

export interface Media {
  file?: File;
  localFile: {
    publicURL: string;
  };
}

export interface File {
  contentType: string;
  url: string;
  fileName: string;
}
