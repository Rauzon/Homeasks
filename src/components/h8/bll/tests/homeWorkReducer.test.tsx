import React from 'react';
import {homeWorkReducer} from "../homeWorkReducer";

let initialState: any[];

beforeEach(() => {
    initialState = [
        {_id: 0, name: "Кот", age: 3},
        {_id: 1, name: "Александр", age: 66},
        {_id: 2, name: "Коля", age: 16},
        {_id: 3, name: "Виктор", age: 44},
        {_id: 4, name: "Дмитрий", age: 40},
        {_id: 5, name: "Ирина", age: 55},
    ]
});

test("sort name up", () => {
    const newState = homeWorkReducer(initialState, {type: "sort", payload: "up"});


    const endState = [
        {_id: 1, name: "Александр", age: 66},
        {_id: 3, name: "Виктор", age: 44},
        {_id: 4, name: "Дмитрий", age: 40},
        {_id: 5, name: "Ирина", age: 55},
        {_id: 2, name: "Коля", age: 16},
        {_id: 0, name: "Кот", age: 3},
    ]

    expect(newState).toStrictEqual(endState);
});
test("sort name down", () => {

    const newState = homeWorkReducer(initialState, {type: "sort", payload: "down"});


    const endState = [
        {_id: 0, name: "Кот", age: 3},
        {_id: 2, name: "Коля", age: 16},
        {_id: 5, name: "Ирина", age: 55},
        {_id: 4, name: "Дмитрий", age: 40},
        {_id: 3, name: "Виктор", age: 44},
        {_id: 1, name: "Александр", age: 66},
    ]

    expect(newState).toStrictEqual(endState);

});
test("check age 18", () => {

    const newState = homeWorkReducer(initialState, {type: "check", payload: 18});

    const endState = [
        {_id: 1, name: "Александр", age: 66},
        {_id: 3, name: "Виктор", age: 44},
        {_id: 4, name: "Дмитрий", age: 40},
        {_id: 5, name: "Ирина", age: 55},
    ]

    expect(newState).toStrictEqual(endState);
    expect(newState.length).toStrictEqual(4);

})
