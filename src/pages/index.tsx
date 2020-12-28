import React from "react";
import { graphql } from "gatsby";
import "@fontsource/ubuntu";
import "../styles/global.scss";

import Landing from "../partials/Landing";

export interface DataClass {
  allContentfulAbout: AllContentfulAbout;
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
  return (
    <main>
      <title>Home Page</title>
      <Landing body={body} greeting={greeting} jobTitle={jobTitle} />
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
  }
`;

export default IndexPage;
