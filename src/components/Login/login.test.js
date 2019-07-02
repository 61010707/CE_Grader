import React from "react";
import { shallow, mount, render } from "enzyme";

import Login from "./index";
import { StateContext, initialState } from "../../store/StateProvider"
import reducer from '../../store/reducer'
import {TEST_ACTION} from '../../store/actions_const'

const test_case = {
  type: TEST_ACTION,
  payload: "TEST"
}

describe("Login with useContext", () => {

  const App = () => {
    let [state, dispatch] = React.useReducer(reducer, initialState)
    React.useEffect(()=>{
      dispatch(test_case)
    })
    return (
      <StateContext.Provider value={{ state, dispatch }}>
        <Login />
      </StateContext.Provider>
    )
  }
  const component = mount(<App />)
  it('should match with case', () => {
    expect(component.contains(test_case.payload)).toBe(true)
  })
});

