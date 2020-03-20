import React from 'react';
import ReactDOM from 'react-dom';
import Test from '../Test';

// import {render} from '@testing-library/react';

it('renders without crashing', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<Test></Test>,div)
})