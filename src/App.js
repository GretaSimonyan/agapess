import React from 'react';
import Home from './pages/Home';
import CollextionIntro from './pages/CollextionIntro';
import { Route, Switch } from 'react-router-dom';

import GlobalStyles from './styled/globalStyles';

function App(){
    return(
        <>
            <GlobalStyles/>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/CollextionIntro' exact component={CollextionIntro} />
            </Switch>
        </>
    )
}

export default App;