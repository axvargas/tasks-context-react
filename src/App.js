import './App.css';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { Switch, Route } from 'react-router-dom'
import { TaskContextProvider } from './context/tasks/context';
function App() {
  return (
    <>
      <div className="h-screen text-white text-center p-10">
        <div className="container mx-auto h-full">
          <TaskContextProvider>
            <Header />
            <Switch>
              <Route exact path='/' component={TaskList} />
              <Route path='/add' component={TaskForm} />
              <Route path='/edit/:id' component={TaskForm} />
            </Switch>
          </TaskContextProvider>
        </div>
      </div>
    </>
  );
}

export default App;
