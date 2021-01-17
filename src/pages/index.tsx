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
import { HomeData } from "core/home.types";

const IndexPage = ({ data }: { data: HomeData }) => {
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
      <Projects projects={projects} />
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
        timePeriod
        scope
        stack
        type
        tags
        content {
          raw
        }
        media {
          localFile {
            publicURL
          }
        }
      }
    }
  }
`;

export default IndexPage;
