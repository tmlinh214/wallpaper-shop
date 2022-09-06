import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import {BrowserRouter as Router} from 'react-router-dom'
import {BrowserContext} from './browserContext'

const root= ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <BrowserContext>
        <Router>
            <App />
        </Router>
    </BrowserContext>
)
// ReactDOM.render(
//     <BrowserContext>
//         <Router>
//             <App />
//         </Router>
//     </BrowserContext>

// ,
// document.getElementById("root"))