import React from 'react';
import {shallow} from 'enzyme';

import MainStore from '../components/mainstore';

describe('<MainStore />', () => {

    it('Renders without crashing', () => {
        shallow(<MainStore />);
    });

})