import React from "react";
import styled from "styled-components";

import { StateContext } from '../../store/StateProvider'
import {TEST_ACTION} from '../../store/actions_const'

const Div = styled.div`
  background-color: teal;
`;

const ExtraDiv = styled(Div)`
  background-color: red;
  font-size: 30px;
`;

export default () => {
  let { state, dispatch } = React.useContext(StateContext)
  return (
    <div>
      {state.text}
      <br/>
      <Div>{state.text}</Div>
      <br/>
      <ExtraDiv>{state.text}</ExtraDiv>
      <br/>
      <input type="text" placeholder="Test reducer with context api"
      onChange={e=>{
        dispatch({
          type:TEST_ACTION,
          payload:e.target.value
        })
      }}
      autoFocus />
    </div>
  );
};
