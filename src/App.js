
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import { Provider } from 'react-redux';

import store from './utils/store';

function App() {
  return (


    <Provider store = {store} >
    <div className="App">
      {/* <h1 className="text-green-700 font-bold">Ganesha</h1> */}

      {/* 
         *Header
         *Body
           *sideBar
             -MenuItems
           *Main container
             -ButtonsList
             -VideoContainer
               -videoCard


      
      
      */}



      <Header />
      <Body />

    
    </div>
    </Provider>
  );
}

export default App;
