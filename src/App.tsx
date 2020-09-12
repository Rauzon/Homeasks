import React from 'react';
import './App.css';
import {Counter} from './components/task03/Counter';
import {Messages} from "./components/task01/Messages";
import {ListOfTasksHOC} from './components/task02/listOfTasksHOC';
import {ShowCustomComponents} from './components/task04/ShowCustomCompoents';
import {NavBar} from './components/NavBar';
import {Route} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <NavBar/>
            <Route path={'/pre-junior'} render={() => <Messages/>}/>
            <Route path={'/pre-junior'} render={() => <ListOfTasksHOC/>}/>
            <Route path={'/pre-junior'} render={() => <Counter/>}/>
            <Route path={'/pre-junior'} render={() => <ShowCustomComponents/>}/>
        </div>
    );
}

export default App;