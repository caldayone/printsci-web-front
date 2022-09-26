import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 86vh;
  display: flex;
  background-color: rgb(0,0,0);
  position: relative;
  overflow: hidden;
  margin-bottom: 20px;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;

  cursor: pointer;
  opacity: 0.9;

  z-index: 2;

  transition: all 0.2s ease;
  &:hover {
    background-color: rgb(14, 14, 14);
    color: rgb(255, 255, 255);
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  padding-top: 40px;
  transition: all 0.8s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;

  background-color: rgb(0, 0, 0);
`;
const ImgContainer = styled.div`
  height: 150%;
  flex: 1;
  margin-left: 80px;
  padding-top: 180px;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1.5;
  padding: 50px;
  margin-right: 80px;
  color: rgb(255,255,255);
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1px;
`;

export {
  Container,
  Arrow,
  Wrapper,
  Slide,
  ImgContainer,
  Image,
  InfoContainer,
  Title,
  Desc,
};
