import React from 'react'

import { Router, Route } from "react-router-dom"
import { ConnectedRouter } from 'connected-react-router'
// import {history} from

import Home from './containers/Home';


const CreateRouter = () => (
    <ConnectedRouter history={history}>
        <Route path="/" exact component={Home} />
        {/*
            <Route path="/center" component={Center} />
            <Route path="/page10006" component={Page10006} />
            <Route path="/browserindex" component={BrowserIndex} />
        */}
    </ConnectedRouter>
);

export default CreateRouter