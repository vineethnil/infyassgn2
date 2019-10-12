import React from 'react';
import { Route,Switch } from "react-router-dom";
import './App.css';
import Upload from "./components/Upload";

class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = { 
       
    };
  }

  render() {
    return (
      <div>
        <div id="main_outer_cntr">
          <Switch>
            <Route path="/" exact component={Upload}/>
            <Route path="/upload" component={Upload}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;




