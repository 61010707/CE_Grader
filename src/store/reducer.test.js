import reducer from './reducer'
import { initialState } from './StateProvider'

describe("reducer", () => {
    it("should return defualt state", () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })
})