import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from "./components/Homepage"
import Diagnosis from "./components/diagnosis"

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path="/diagnosis" component={Diagnosis} />
                </Switch>
            </BrowserRouter >
        )
    }
}

export default App;