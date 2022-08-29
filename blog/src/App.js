import Day from './component/Day';
import DayList from './component/DayList';
import Header from './component/Header';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import EmptyPage from './component/EmptyPage';
import Test from './component/Test';

function App() {
  return (
    /* Router start */
    <BrowserRouter> 
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/'>
            <DayList />
            <Link to={'/test'} style={{display:'block', marginTop:"20px" ,color:"blue", fontWeight:'500', fontSize:"30px"}}>Test Site</Link>
          </Route>

          <Route path='/day/:day'>
            <Day />
          </Route>

          <Route path='/test'>
            <Test />
          </Route>

          <Route>
            <EmptyPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
