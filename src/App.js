import './App.css';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { Switch, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <div className="h-screen text-white text-center p-10">
        <div className="container mx-auto h-full">
          <Header />
          <Switch>
            <Route exact path='/' component={TaskList} />
            <Route path='/add' component={TaskForm} />
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;
