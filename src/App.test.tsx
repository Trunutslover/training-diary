import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import store from "./redux/store";
import Enzyme, {shallow, mount} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import {shallowToJson, mountToJson} from 'enzyme-to-json';

Enzyme.configure({adapter: new Adapter()});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><App /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe(`App snapshot`, () => {
  it(`App should render correctly`, () => {
    const app = mount(<Provider store={store}><App/></Provider>);
    expect(mountToJson(app)).toMatchSnapshot();
  });
});