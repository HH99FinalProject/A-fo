import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';
import { history } from '../redux/configureStore';

import Main from '../pages/Main';
import Board from '../pages/Board';
import PostDetail from '../pages/PostDetail';
import PostWrite from '../pages/PostWrite';
import Detail from '../pages/Detail';
import MyPage from '../pages/MyPage';
import SubMain1 from '../pages/SubMain1';
import SubMain2 from '../pages/SubMain2';

import { Div, GlobalStyle } from '../components/ui';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Div container>
        <ConnectedRouter history={history}>
          <Route exact path="/" component={Main} />
          <Route exact path="/Board" component={Board} />
          <Route exact path="/PostDetail" component={PostDetail} />
          <Route exact path="/PostWrite" component={PostWrite} />
          <Route exact path="/Detail" component={Detail} />
          <Route exact path="/MyPage" component={MyPage} />
          <Route exact path="/SubMain1" component={SubMain1} />
          <Route exact path="/SubMain2" component={SubMain2} />
        </ConnectedRouter>
      </Div>
    </React.Fragment>
  );
}

export default App;
