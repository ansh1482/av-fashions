import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.jsx';
import Shop from './pages/shop/shop.jsx';
import Header from './components/header/header.jsx';
import SignInSignUp from './pages/signin-signup/signin-signup.jsx';
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }
  
  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if(userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapShot => {
            this.setState({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            })
          })
        } else {
          this.setState({
            currentUser: userAuth
          })
        }
      }
    )
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
      <Header currentUser={ this.state.currentUser } />
      <switch>
          <Route exact path='/' component={ HomePage } />
          <Route path='/shop' component={ Shop } />
          <Route path='/signin' component={ SignInSignUp } />
        </switch>
      </div>
    );
  }
}

export default App;
