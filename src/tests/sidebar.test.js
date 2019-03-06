import React from 'react';
import {shallow} from 'enzyme';

import SideBar from '../components/sidebar';

describe('<SideBar />', () => {

    it('Renders without crashing', () => {
        shallow(<SideBar />);
    });

})