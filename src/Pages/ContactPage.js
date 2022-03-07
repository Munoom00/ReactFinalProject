import React from 'react'
import Title from '../Components/Title'
import { InnerLayout, MainLayout } from '../styles/Layout'
import styled from "styled-components";
import {  BsInstagram, BsGithub } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const ContactPage = () => {
  return (
    <ContactStyled>
      <MainLayout>
        <InnerLayout>
          <Title title={'Contact'} span={'Contact'}/>
        </InnerLayout>
        <div className="typography">
        <div className="icons">
          <a style={{padding: 10}} href="https://www.facebook.com/tanva1942mon">
            <div  className="icon i-facebook">
              <FaFacebook size={"40%"} />
            </div>
          </a>
          <a style={{padding: 10}} href="https://www.instagram.com/mon_tanva/">
          <div className="icon i-instagram">
            <BsInstagram size={"40%"} />
          </div>
          </a>
          <a style={{padding: 10}} href="https://github.com/Munoom00">
          <div className="icon i-github">
            <BsGithub size={"40%"} />
          </div>
          </a>
        </div>  
        </div>
      </MainLayout>
    </ContactStyled>
  )
}

const ContactStyled = styled.header`
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

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          color: #007bff;
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }

      .i-instagram {
        &:hover {
          color: #f0326e;
        }
      }
      .i-github {
        &:hover {
          color: #5f4687;
        }
      }
    }
  }
`;

export default ContactPage