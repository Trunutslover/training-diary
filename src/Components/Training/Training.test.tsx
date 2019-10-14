import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Training from "./Training";
import {actionTypes} from "../../types";
import {shallowToJson} from "enzyme-to-json";

Enzyme.configure({adapter: new Adapter()});

describe(`Training snapshot`, () => {
    it('Training should render correctly', () => {
        const mockProps = {
            id: 1,
            isDone: false,
            exercises: [
                {
                    number: 1,
                    name: `squats`,
                    sets: [10, 12, 12, 10, 8]
                }
            ]
        };

        const output = shallow(<Training id={mockProps.id} isDone={mockProps.isDone} exercises={mockProps.exercises} toggleIsDoneAC={() => ({type: actionTypes.TOGGLE_IS_DONE})}/>);
        expect(shallowToJson(output)).toMatchSnapshot();
    });
});