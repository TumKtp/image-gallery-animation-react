import styled from "styled-components";
import "animate.css";

import { Fragment } from "react";
import ImageCard from "./ImageCard";

const Title = styled.div`
  font-size: 4em;
  text-align: center;
  color: palevioletred;
  font-family: "Potta One", cursive;
`;
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const imgUrl = [];
for (let i = 0; i < 100; i++)
  imgUrl.push(`https://source.unsplash.com/collection/${i}`);

function App() {
  return (
    <Fragment>
      <Wrapper>
        <Title className="animate__animated animate__zoomInDown">
          Image Gallery
        </Title>
      </Wrapper>
      <div className="row">
        {imgUrl.map((item) => (
          <ImageCard>{item}</ImageCard>
        ))}
      </div>
    </Fragment>
  );
}

export default App;
