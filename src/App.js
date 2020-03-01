import React, { memo } from 'react';
import Home from './pages/Home';
import CollectionIntro from './pages/CollectionIntro';
import NotFound from './pages/NotFound';
import { Route, Switch } from 'react-router-dom';
// import Snow from 'react-snow-effect';

import GlobalStyles from './styled/globalStyles';

function App(){
    return(
        <>
            <GlobalStyles/>
            {/* <Snow /> */}
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/CollectionIntro/:id' exact component={CollectionIntro} />
                <Route component={NotFound} />
            </Switch>
        </>
    )
}

export default memo(App);