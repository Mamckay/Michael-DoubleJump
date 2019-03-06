import React from 'react';
import {shallow} from 'enzyme';

import HomePage from '../components/homepage';

describe('<HomePage />', () => {

    it('Renders without crashing', () => {
        shallow(<HomePage />);
    });

})