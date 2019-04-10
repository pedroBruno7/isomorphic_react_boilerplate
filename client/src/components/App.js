import React from 'react';
import Header from './Header';
import { Route, Switch } from 'react-router-dom';
import Link1 from './Link1';
import Link2 from './Link2';

class App extends React.Component {

    state = {
        someState: 'some state'
    }

    render() {
        return (
            <div>
                App Component
                <Header/>
                <Switch>
                    <Route path='/link1' component={Link1}/>
                    <Route path='/link2' component={Link2}/>
                </Switch>
            </div>
        )
    }
}

export default App;
