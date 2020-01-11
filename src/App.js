import React from 'react';
import Home from './pages/Home';
import CollextionIntro from './pages/CollextionIntro';
import NotFound from './pages/NotFound';
import { Route, Switch } from 'react-router-dom';

import GlobalStyles from './styled/globalStyles';

function App(){
    return(
        <>
            <GlobalStyles/>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/CollextionIntro/:id' exact component={CollextionIntro} />
                <Route component={NotFound} />
            </Switch>
        </>
    )
}

export default App;