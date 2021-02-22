import { Component } from "react";
import Header from "./components/header"
import Body from "./components/body"
import Navbar from './components/navBar/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class App extends Component {
  render(){
    return (
      <div>
        <Router>
          <Navbar/>
          <Switch>
            <Route path ="/" />
          </Switch>
        </Router>
        
        <Body/>

      </div>

    )
  }
}
export default App;