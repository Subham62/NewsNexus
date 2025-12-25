import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Bookmarks from './components/Bookmarks';

export class App extends Component {
  static propTypes = {}

  // c = 'subham';
  pageSize=5;

  state = {
    progress: 0
  }
  setProgress =(progress) => {
    this.setState({progress:progress})
  }
  render() {
    return (
      // <div>
      //   <NavBar/>
      //   <News   pageSize={10}/>
      // </div>
      <div>
        <Router>
          <NavBar/>
          <LoadingBar
          // height={3}
          color='#f11946'
          progress={this.state.progress}
          
          />
          <Routes>
            <Route exact path="/bookmarks" element={<Bookmarks/>} />
            <Route exact path="/" element = {<><News setProgress={this.setProgress}  key='top' pageSize={this.pageSize} country='in' category='top'/></>}/>
            <Route exact path="/newsnexus/business" element = {<><News setProgress={this.setProgress}  key='business' pageSize={this.pageSize} country='in' category='business'/></>}/>
            <Route exact path="/newsnexus/entertainment" element = {<><News setProgress={this.setProgress}  key='entertainment' pageSize={this.pageSize} country='in' category='entertainment'/></>}/>
            <Route exact path="/newsnexus/education" element = {<><News setProgress={this.setProgress}  key='education' pageSize={this.pageSize} country='in' category='education'/></>}/>
            <Route exact path="/newsnexus/health" element = {<><News setProgress={this.setProgress}  key='health' pageSize={this.pageSize} country='in' category='health'/></>}/>
            <Route exact path="/newsnexus/science" element = {<><News setProgress={this.setProgress}  key='science' pageSize={this.pageSize} country='in' category='science'/></>}/>
            <Route exact path="/newsnexus/sports" element = {<><News setProgress={this.setProgress}  key='sports' pageSize={this.pageSize} country='in' category='sports'/></>}/>
            <Route exact path="/newsnexus/technology" element = {<><News setProgress={this.setProgress}  key='technology' pageSize={this.pageSize} country='in' category='technology'/></>}/>
          </Routes>
        </Router>
      </div>
      // <div>
      //   <Router>
      //     <NavBar/>
      //     <Switch>
      //       <Route exact path="/" > <News setProgress={this.setProgress}  key='general' pageSize={5} country='us' category='general'/>  </Route>
      //       <Route exact path="/business"> <News setProgress={this.setProgress}  key='business' pageSize={5} country='us' category='business'/></Route>
      //       <Route exact path="/entertainment"> <News setProgress={this.setProgress}  key='entertainment' pageSize={5} country='us' category='entertainment'/></Route>
             
      //     </Switch>
      //   </Router>
      // </div>
    )
  }
}

export default App