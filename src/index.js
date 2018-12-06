import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from '../src/HomePage'

const App = () => { return <HomePage /> }

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)