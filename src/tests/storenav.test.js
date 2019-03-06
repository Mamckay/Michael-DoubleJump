import React from 'react';
import {shallow} from 'enzyme';

import StoreNav from '../components/storenav';

describe('<StoreNav />', () => {

    it('Renders without crashing', () => {
        shallow(<StoreNav title='foo'/>);
    });

})