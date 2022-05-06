import React, { createContext } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';
import { history } from '../redux/configureStore';

import Board from '../pages/Board';
import Detail from '../pages/Detail';
import Main from '../pages/Main';
import MyPage from '../pages/MyPage';
import PostDetail from '../pages/PostDetail';
import PostWrite from '../pages/PostWrite';
import SubMain1 from '../pages/SubMain1';
import SubMain2 from '../pages/SubMain2';
import WorldMap from '../pages/WorldMap';

import { Header } from '../components/core';
import { Div, GlobalStyle } from '../components/ui';

export const AppContext = createContext();

function App() {
  const version = {
    vTarget: '목적',
    vCountry: '나라',
  };
  return (
    <React.Fragment>
      <GlobalStyle />
      <AppContext.Provider value={version}>
        <Header></Header>
        <ConnectedRouter history={history}>
          <Route exact path="/" component={Main} />
          <Route exact path="/Board" component={Board} />
          <Route exact path="/Detail" component={Detail} />
          <Route exact path="/MyPage" component={MyPage} />
          <Route exact path="/PostDetail" component={PostDetail} />
          <Route exact path="/PostWrite" component={PostWrite} />
          <Route exact path="/SubMain1" component={SubMain1} />
          <Route exact path="/SubMain2" component={SubMain2} />
          <Route exact path="/WorldMap" component={WorldMap} />
        </ConnectedRouter>
      </AppContext.Provider>
    </React.Fragment>
  );
}

export default App;
