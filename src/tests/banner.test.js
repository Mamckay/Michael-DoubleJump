import React from 'react';
import {shallow} from 'enzyme';

import Banner from '../components/banner';

describe('<Banner />', () => {

    it('Renders without crashing', () => {
        shallow(<Banner />);
    });

})