import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import Aboutme from './component/Aboutme/Aboutme.jsx';
import Portfolio from './component/Portfolio/portfolio';
import Sydeco from './component/Portfolio/Sydeco';
import Asuji from './component/Portfolio/Asuji';
import Newsletter from './component/Portfolio/newsletter/newsletter';
import Poster from './component/Portfolio/poster/poster';
import Coloring from './component/Portfolio/Coloring/coloring';
import Card from './component/Portfolio/cards/card';
import Illustration from './component/Portfolio/Illustration/illustration';
import Contact from './component/Contact/contact';

export default class App extends Component {

  state = {animationAbout:'nav'}
    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll = (event) => {
        if (window.scrollY>50){
            this.setState({animationAbout:'nav-bg-white'})
        }else{
            this.setState({animationAbout:'nav-bg-none'})
        }
        //console.log(event.srcElement.body.scrollTop)
        // console.log(window.scrollY)
    }

  render(){
  return (
    <div className="App">
      <Router>
          <Navbar textClass={this.state.animationAbout}/>
            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/aboutme' component={Aboutme}/>
              <Route path='/portfolio' component={Portfolio}/>
              <Route path='/ptsydeco' component={Sydeco}/>
              <Route path='/asuji' component={Asuji}/>
              <Route path='/newsletter' component={Newsletter}/>
              <Route path='/poster' component={Poster}/>
              <Route path='/adultcoloringcalendar' component={Coloring}/>
              <Route path='/greetingcards' component={Card}/>
              <Route path='/illustration' component={Illustration}/>
              <Route path='/contact' component={Contact}/>
            </Switch>
      </Router>
    </div>
  );
}}

