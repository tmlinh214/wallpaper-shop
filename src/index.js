import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import {BrowserRouter as Router} from 'react-router-dom'
import {BrowserContext} from './browserContext'


ReactDOM.render(
    <BrowserContext>
        <Router>
            <App />
        </Router>
    </BrowserContext>

,
document.getElementById("root"))