import React from "react";
import { graphql } from "gatsby";
import "@fontsource/ubuntu";
import "styles/global.scss";
import Modal from "react-modal";
import { HomePageData } from "types/homepage.types";

// http://reactcommunity.org/react-modal/accessibility/#app-element
Modal.setAppElement("#___gatsby");

import Landing from "components/homepage/landing";
import PageNavigation from "components/homepage/page-navigation";
import Skills from "components/homepage/skills";
import Projects from "components/homepage/projects";
import Contact from "components/homepage/contact";
import Footer from "components/homepage/footer";
import { Section } from "components/homepage/page-navigation/page-navigation";

const sections: Section[] = [
  {
    name: "About",
    id: "about",
    iconName: "person",
  },
  {
    name: "Skills",
    id: "skills",
    iconName: "statsBars",
  },
  {
    name: "Portfolio",
    id: "portfolio",
    iconName: "work",
  },
  {
    name: "Contact",
    id: "contact",
    iconName: "envelope",
  },
];

const IndexPage = ({ data }: { data: HomePageData }) => {
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
      <PageNavigation sections={sections} />
      <Skills skillsGroups={skills} />
      <Projects projects={projects} />
      <Contact />
      <Footer />
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
