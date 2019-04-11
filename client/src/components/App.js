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
        // throw new Error('coco')
        return (
            <div>
                <h1>App Component</h1>
                <h1>ola</h1>
                <button onClick={this.clickHandle}>Click me</button>
                <Header/>
                <Switch>
                    <Route path='/link1' component={Link1}/>
                    <Route path='/link2' component={Link2}/>
                    <Route path='/users' render={props => (
                        <Users {...props} data={this.props.dataFromDB ? this.props.dataFromDB.users : undefined} />
                    )}/>
                </Switch>
            </div>
            
        )
    }
}

export default App;
