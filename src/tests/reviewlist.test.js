import React from 'react';
import {shallow} from 'enzyme';

import ReviewList from '../components/reviewlist';

describe('<ReviewList />', () => {

    it('Renders without crashing', () => {
        shallow(<ReviewList />);
    });

})