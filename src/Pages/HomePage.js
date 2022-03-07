import React from "react";
import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import YoutubeIcon from "@material-ui/icons/YouTube";

const HomePage = () => {
  return (
    <HomePageStyled>
      <div className="typography">
        <h1>
          Hi I'm <span>Tanva Taemthong</span>
        </h1>
        <p>
          I'm Developer, I'm study in Thia-Nichi Institute of Technology
        </p>
      </div>
    </HomePageStyled>
  );
};

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;
  }
`;

export default HomePage;
