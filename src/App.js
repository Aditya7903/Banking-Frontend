import './App.css';
import Home from './Components/Home';
import {BrowserRouter as Router,Route}  from 'react-router-dom'
import CustomerList from './Components/CustomerList';
import History from './Components/History';
import Profile from './Components/Profile';
function App() {
  return (
   <Router>
     <Route  exact path="/" component={Home}></Route>
     <Route  exact path="/customers" component={CustomerList}></Route>
     <Route path="/profile/:id" component={Profile}></Route>
     <Route exact path="/history" component={History}></Route>
   </Router>
  );
}

export default App;
