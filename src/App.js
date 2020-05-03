import React from 'react';
import Products from './components/Products';

import {BrowserRouter,Route,Switch} from 'react-router-dom';
import LoginForm from './components/LoginForm';
import {ProtectedRoute} from './components/ProtectedRoute';
import AuthContext from './components/AuthContext';
function App() {
  return (
    <BrowserRouter>
     
        <div className="App">
           <Switch>
            <AuthContext>
              <ProtectedRoute exact path="/product" component={Products}/>
              <Route exact path="/" component={LoginForm}/>
            </AuthContext>
            
            <Route path="*" component={() => <h1>Error 404 not found!</h1>} />
           </Switch>
        </div>
     
    </BrowserRouter>
    
  );
}

export default App;
