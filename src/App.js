import React from "react";
import Navbar from "./navbar/index"
import Footer from "./footer/footer"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/index';
import SimpsonQuotes from './simpson-quotes/simpsonquotes';



const App = () => {  
  return(
    <div className="App"> 
    <div className="page-container">
      <div className="content-wrap">
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/simpsonquotes' exact component={SimpsonQuotes} />
      </Switch>
      </Router>
      <div>
      <Home
        tittle="Search your quote"
        imageUrl="https://assets.foxdcg.com/dpp-uploaded/images/the-simpsons/keyart_s32simp.jpg"
        body="Get Your Quote"
       />
     </div>
      </div>
      <Footer />
     </div>
    </div>
  );
};

export default App;
