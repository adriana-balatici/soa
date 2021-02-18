import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Row } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { configureStore } from './configureStore'
import rootReducer from './reducers/index'
import { Provider } from 'react-redux'
import LogInContainer from './components/log_in/LogInContainer';
import RegisterContainer from './components/register/RegisterContainer';
import NavContainer from './components/nav/NavContainer';
import { getUser } from './actions'
import { getCookie } from './helpers'

function App() {
  const store = configureStore(rootReducer)
  useEffect(() => {
    const token = getCookie("token")
    const userId = getCookie("userId")
    if (token && userId) {
      store.dispatch(getUser(userId, token))
    }
  })

  return (
    <Provider store={store}>
      <Router>
        <div>
          <NavContainer></NavContainer>
          <Container>
            <Switch>
              <Route path="/login">
                <LogInContainer />
              </Route>
              <Route path="/register">
                <RegisterContainer />
              </Route>
              <Route path="/home">
                <div className="centered-div">
                  <Row>
                    <h1>HOME</h1>
                  </Row>
                  <div className="separator"></div>
                </div>
              </Route>
            </Switch>
          </Container>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
