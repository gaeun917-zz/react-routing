import React, {Component} from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import About from './About';
import Repos from './Repos';
import Home from './Home';
import ReposDetails from './ReposDetails';
import ServerError from './ServerError';
import createBrowserHistory from 'history/lib/createBrowserHistory';


class App extends Component {

    render() {
        return (<div>
                <menu>
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/repos">Repos</Link></li>
                    </ul>
                </menu>
                {this.props.children}
            </div>
        );
    }
}

const routing = (
    <Router history={createBrowserHistory}>
        <Route path="/" component={App}/>
        <Route path="/about" component={About} title='about us'/>
        <Route path="/repos" component={Repos}/>
        <Route path="details/:repo_name" component={ReposDetails} />
        <Route path="error" component={ServerError} />
    </Router>
)

render(routing, document.getElementById('root'));