import { expect, test } from "vitest";
import { counterReducer } from "../reducers/counter-reducer";

test("change counter +1 0=>1", () => {
    expect(counterReducer({value: 0}, {type: "UP", payload: 1})).toEqual({value: 1});
})
