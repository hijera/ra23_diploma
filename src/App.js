import React from 'react';
import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import MainPage from "./components/MainPage";
import NotFoundPage from './components/NotFoundPage'
import './css/style.css';
import CatalogPage from "./components/CatalogPage";
import ContactsPage from "./components/ContactsPage";
import AboutPage from "./components/AboutPage";
import ProductPage from "./components/ProductPage";
import CartPage from "./components/CartPage";

function App() {
  return (
      <>
          <Router>
              <Header />
            <Switch>
                <Route path={'/catalog.html'} component={CatalogPage} />
                <Route path={'/cart.html'} component={CartPage} />
                <Route path={'/about.html'} component={AboutPage} />
                <Route path={'/contacts.html'} component={ContactsPage} />
                <Route path={'/products/:id.html'} component={ProductPage} />
                <Route path={'/'} exact component={MainPage} />
                <Route path={'*'} component={NotFoundPage} />
            </Switch>
          <Footer />
        </Router>

        </>
  );
}

export default App;
