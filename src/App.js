import React from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'

import { store, history } from './store';

import Layout from './Layout';
import Companies from './companies/Companies';
import Websites from './websites/Websites';
import About from './about/About';

export default function App() {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Layout>
                    <Switch>
                        <Redirect from='/' to='/websites' exact/>
                        <Route path="/companies/:id?" component={Companies}/>
                        <Route path="/websites/:id?" component={Websites}/>
                        <Route path="/about" component={About}/>
                    </Switch>
                </Layout>
            </ConnectedRouter>
        </Provider>
    )
}