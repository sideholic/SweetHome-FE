import {
  FooterFlexContent,
  FooterText,
  FooterWrapper,
  TextWrapper,
} from "../../styles/FooterStyle";
import { CommInner } from "../../styles/GlobalStyle";
import { Logo } from "../../styles/HeaderStyle";
import React from "react";
import { AiFillGithub } from "react-icons/ai";

export default function Footer() {
  return (
    <FooterWrapper>
      <CommInner>
        <FooterFlexContent>
          <Logo>SWEET HOME</Logo>
          <TextWrapper>
            <FooterText>
              <span className="leftSpan">TEAM</span>
              <span>
                SIDEHOLIC &copy;&nbsp;
                <a
                  href="https://github.com/sideholic"
                  target="_blank"
                  rel="noreferrer nofollow"
                >
                  <AiFillGithub />
                </a>
              </span>
            </FooterText>
            <FooterText>
              <span>FE</span>
              <span>
                전도현&nbsp;
                <a
                  href="https://github.com/jeondoh"
                  target="_blank"
                  rel="noreferrer nofollow"
                >
                  <AiFillGithub />
                </a>
              </span>
            </FooterText>
            <FooterText>
              <span className="leftSpan">EMAIL</span>
              <span>jundo1302@gmail.com</span>
            </FooterText>
            <FooterText>
              <span>BE</span>
              <span>
                박동환&nbsp;
                <a
                  href="https://github.com/dong-park"
                  target="_blank"
                  rel="noreferrer nofollow"
                >
                  <AiFillGithub />
                </a>
              </span>
            </FooterText>
            <FooterText />
            <FooterText>
              <span>SUPPORT</span>
              <span>
                이연주&nbsp;&nbsp;이은아&nbsp;
                <a
                  href="https://github.com/eunalee"
                  target="_blank"
                  rel="noreferrer nofollow"
                >
                  <AiFillGithub />
                </a>
              </span>
            </FooterText>
          </TextWrapper>
        </FooterFlexContent>
      </CommInner>
    </FooterWrapper>
  );
}
