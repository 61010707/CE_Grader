import React from "react";

import styled from "styled-components";

const Div = styled.div`
  background-color: teal;
`;

const ExtraDiv = styled(Div)`
  background-color: red;
`;

export default () => {
  return <ExtraDiv>Login</ExtraDiv>;
};
