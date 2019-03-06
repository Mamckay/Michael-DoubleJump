import React from 'react';
import {shallow} from 'enzyme';

import ReviewNav from '../components/reviewnav';

describe('<ReviewNav />', () => {

    it('Renders without crashing', () => {
        shallow(<ReviewNav />);
    });

})