import React from "react";
import styled from "styled-components/macro";
import { QUERIES } from "../../constants";

import Header from "../Header";
import ShoeIndex from "../ShoeIndex";

const App = () => {
  const [sortId, setSortId] = React.useState("newest");

  return (
    <>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </>
  );
};

const Main = styled.main`
  padding: 64px 32px;

  @media (${QUERIES.tabletAndBelow}) {
    padding-top: 48px;
    padding-bottom: 48px;
  }

  @media (${QUERIES.phoneAndBelow}) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export default App;
