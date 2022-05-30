import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';
import { history } from '../redux/configureStore';

import Board from '../pages/Board';
import Detail from '../pages/Detail';
import Main from '../pages/Main';
import MyPage from '../pages/MyPage';
import PostDetail from '../pages/PostDetail';
import PostDetailEdit from '../pages/PostDetailEdit';
import PostWrite from '../pages/PostWrite';
import SubMain1 from '../pages/SubMain1';
import SubMain2 from '../pages/SubMain2';
import WorldMap from '../pages/WorldMap';
import Chat from '../pages/Chat';

import { Kakao, Google } from '../components/core';
import { GlobalStyle } from '../components/ui';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <ConnectedRouter history={history}>
        <Route exact path="/" component={Main} />
        <Route exact path="/oauth/kakao/callback" component={Kakao}></Route>
        <Route exact path="/oauth/google/callback" component={Google}></Route>
        <Route exact path="/Board" component={Board} />
        <Route exact path="/Detail" component={Detail} />
        <Route exact path="/MyPage" component={MyPage} />
        <Route exact path="/PostDetail/:postId" component={PostDetail} />
        <Route
          exact
          path="/PostDetail/edit/:postId"
          component={PostDetailEdit}
        />
        <Route exact path="/PostWrite" component={PostWrite} />
        <Route exact path="/SubMain1" component={SubMain1} />
        <Route exact path="/SubMain2" component={SubMain2} />
        <Route exact path="/WorldMap" component={WorldMap} />
        <Route exact path="/Chat" component={Chat} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
