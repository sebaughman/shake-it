import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ReviewItem from './ReviewItem';

const review = {
  "rating": 0.8,
  "publish_date": "2016-09-05T23:25:47.642350Z",
  "id": "9783221620868",
  "body": "The fool doth think he is wise, but the wise man knows himself to be a fool.",
  "author": "Kaley Schiller"
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReviewItem {...review} />, div);
});

it('renders date in correct format', () => {
  const wrapper = shallow(<ReviewItem {...review} />);
  const date = 'Mon Sep 05 2016';
  expect(wrapper.contains(date)).toEqual(true);
});