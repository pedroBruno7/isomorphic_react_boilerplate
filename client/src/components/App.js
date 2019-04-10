import React from 'react';
import Header from './Header';
import { Route, Switch } from 'react-router-dom';
import Link1 from './Link1';
import Link2 from './Link2';
import Users from './Users';

class App extends React.Component {

    state = {
        someState: 'some state'
    }

    clickHandle = () => {
        console.log('js running!!!')
    }

    render() {
        return (
            <div>
                App Component
                <button onClick={this.clickHandle}>Click me</button>
                <Header/>
                <Switch>
                    <Route path='/link1' component={Link1}/>
                    <Route path='/link2' component={Link2}/>
                    <Route path='/users' component={Users}/>
                </Switch>
            </div>
        )
    }
}

export default App;
