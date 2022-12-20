import React, { useState } from "react";
import styled from "styled-components";
import { Typography } from "../components/StyledComponents";
import ContactModal from "../components/ContactModal/ContactModal";
import Introduction from "../components/Sections/Introduction";
import Skills from "../components/Sections/Skills";
import PastProjects from "../components/Sections/PastProjects";
import Interested from "../components/Sections/Interested";
import Footer from "../components/Footer";

const Root = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  position: relative;
`;

const Home = () => {
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const handleToggleContactModal = () => {
    setContactModalOpen(!isContactModalOpen);
  };

  return (
    <Root>
      <ContactModal
        onClose={handleToggleContactModal}
        isOpen={isContactModalOpen}
      />
      <Introduction
        onContactMeClick={handleToggleContactModal}
        isModalOpen={isContactModalOpen}
      />
      <Skills />
      <PastProjects />
      <Interested
        isModalOpen={isContactModalOpen}
        onContactMeClick={handleToggleContactModal}
      />
      <Footer />
    </Root>
  );
};

export default Home;
