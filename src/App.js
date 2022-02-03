
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Footer from './Pages/Home/Footer/Footer';
import Header from './Pages/Home/Header/Header';

import AuthProvider from './context/AuthProvider';

import MainForm from './Pages/Form/MainForm/MainForm';
import Form from './Pages/Form/Form';









function App() {
  return (
    <div className="App">

      <AuthProvider>
        <BrowserRouter>

          <Header></Header>

          <Switch>

            <Route exact path="/">
              <Form></Form>
            </Route>

            <Route exact path="/form">
              <MainForm></MainForm>
            </Route>






            {/* 
            <PrivateRoute path="/detailedBlog/:blogId">
              <DetailedBlog></DetailedBlog>
            </PrivateRoute> */}





          </Switch>

          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
