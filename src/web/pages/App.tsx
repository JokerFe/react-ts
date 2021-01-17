import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import routes from '@routes/index';

const App = () => {
    return (
        // <RecoilRoot>
        <BrowserRouter>{routes()}</BrowserRouter>
        // </RecoilRoot>
    );
};

export default App;
