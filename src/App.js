import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import ColorPicker from './components/ColorPicker';
import ToDoList from './components/ToDoList'

function App() {
  return (
    <Router>
      <div>
        <Link to="/" style={{margin:"10px"}}>Home</Link>
        <Link to="/colorPicker" style={{margin:"10px"}}>ColorPicker</Link>
        <Link to="/toDoList" style={{margin:"10px"}}>To-Do List</Link>
      </div>
    <Switch>
      <Route path="/colorPicker" component={ColorPicker} />
      <Route path="/toDoList" component={ToDoList} />
      <Route path="/" render={()=>{return <div>This is home!</div>;}}/>
    </Switch>
    </Router>
  );
}

export default App;
