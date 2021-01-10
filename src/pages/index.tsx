import React from "react";
import { graphql } from "gatsby";
import "@fontsource/ubuntu";
import "styles/global.scss";
import Modal from "react-modal";

// http://reactcommunity.org/react-modal/accessibility/#app-element
Modal.setAppElement("#___gatsby");

import Landing from "partials/Landing";
import Skills from "partials/Skills";
import Projects from "partials/Projects";

export interface DataClass {
  allContentfulAbout: AllContentfulAbout;
  allContentfulSkills: any; // @TODO: Give types
  allContentfulProject: any; // @TODO: ^
}

export interface AllContentfulAbout {
  edges: Edge[];
}

export interface Edge {
  node: Node;
}

export interface Node {
  body: Body;
  jobTitle: string;
  greeting: string;
}

export interface Body {
  body: string;
}

const IndexPage = ({ data }: { data: DataClass }) => {
  const {
    body: { body },
    greeting,
    jobTitle,
  } = data.allContentfulAbout.edges[0].node;

  const skills = data.allContentfulSkills.nodes;
  const projects = data.allContentfulProject.nodes;
  return (
    <main>
      <title>Home Page</title>
      <Landing body={body} greeting={greeting} jobTitle={jobTitle} />
      <Skills skillsGroups={skills} />
      <Projects
        projects={[
          ...projects,
          {
            name: "Leverage",
            description:
              "My first serious project in the career. Simple big website, which taught me a lot in a hurtful way.",
            thumbnail: "image.png",
            tags: ["react", "js"],
            liveUrl: "https://bluebracket.net",
            githubUrl: "https://bluebracket.net",
          },
        ]}
      />
    </main>
  );
};

export const pageQuery = graphql`
  query IndexQuery {
    allContentfulAbout {
      edges {
        node {
          body {
            body
          }
          jobTitle
          greeting
        }
      }
    }

    allContentfulSkills {
      nodes {
        name
        skills {
          name
          title
          iconName
        }
      }
    }

    allContentfulProject {
      nodes {
        description
        githubUrl
        name
        table {
          Period_of_time
          Scope
          Technologies
          Type
        }
        tags
        content {
          raw
        }
        media {
          file {
            contentType
            url
            fileName
          }
        }
      }
    }
  }
`;

export default IndexPage;
