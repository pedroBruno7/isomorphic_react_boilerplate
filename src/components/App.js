import React, { Component } from 'react';
// import { Router, Link, Route } from 'react-router';
import { Switch, Route } from 'react-router';

import Users from './Users';
import Contact from './Contact';
// import routes from '../routes';


class App extends Component {


  constructor(props) {
    super(props);
      this.state = {}
  }

  
  render() {


    console.log("render do App!", this.props);
    console.log("render do App!")
    return (
    

  
      // component={Users}

      <Switch>
            <Route exact path="/users" render={(props) => <Users {...props} data={this.props.dataFromDB ? this.props.dataFromDB.users : null} />} />
            <Route exact path="/contact"     component={Contact}/>
      </Switch>

      //   <Router>
      //   <div>
      //     <ul>
      //       <li>
      //         <Link to="/">Home</Link>
      //       </li>
      //       <li>
      //         <Link to="/users">Users</Link>
      //       </li>
      //       <li>
      //         <Link to="/contact">Contact</Link>
      //       </li>
      //     </ul>
      //     <Route exact path="/" component={App} />
      //     <Route exact path="/users" component={Users} />
      //     <Route exact path="/contact" component={Contact} />
      //   </div>
      // </Router>
      )
  }
}

export default App;


// export default () => (
//   <Switch>
//     {routes.map((route, idx) => (
//       <Route exact key={idx} {...route}/>
//     ))}
//   </Switch>
// );
