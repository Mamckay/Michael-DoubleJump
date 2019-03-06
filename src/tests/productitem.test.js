import React from 'react';
import {shallow} from 'enzyme';

import ProductItem from '../components/productitem';

describe('<ProductItem />', () => {

    it('Renders without crashing', () => {
        shallow(<ProductItem />);
    });

})