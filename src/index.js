import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBxOvqHwexFvajH0if2ZetjABr8aYeD5mY';

const App = () => {
    return (<div><SearchBar /></div>);
}

ReactDOM.render(<App />, document.querySelector('.container'));
