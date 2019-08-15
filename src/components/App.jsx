import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Users from './Users';
import Home from './Home';
import Pictures from './Pictures';
import Image from './Image';
import Company from './Company';

let App = () => {
    return (
        <Router>
            <Fragment>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/users" component={Users}/>
                    <Route exact path="/pictures" component={Pictures} />
                    <Route exact path="/:pictureid/image" component={Image} />
                    <Route exact path="/:usersid/users" component={Company} />
                </Switch>
            </Fragment>
        </Router>
    )
}


export default App;