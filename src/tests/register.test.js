import React from 'react';
import {shallow} from 'enzyme';

import Register from '../components/register';

describe('<Register />', () => {

    it('Renders without crashing', () => {
        shallow(<Register />);
    });

})