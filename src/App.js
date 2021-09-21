import './App.css';
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import AddEdit from './pages/AddEdit';
import View from './pages/View';
import About from './pages/About';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <ToastContainer position="top-center" />
      <Switch>

        <Route exact path="/" component={Home}></Route>
        <Route  path="/add" component={AddEdit}></Route>
        <Route  path="/update/:id" component={AddEdit}></Route>
        <Route  path="/view/:id" component={View}></Route>
        <Route path="/about" component={About}></Route>


        </Switch>
    </div>
    </BrowserRouter>

  );
}

export default App;
