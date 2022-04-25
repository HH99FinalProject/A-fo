import React from 'react';
import './App.css';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';
import { history } from '../redux/configureStore';

import Main from '../pages/Main';
import Article from '../pages/Article';
import ArticleDetail from '../pages/ArticleDetail ';
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
          <Route exact path="/Article" component={Article} />
          <Route exact path="/ArticleDetail" component={ArticleDetail} />
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
