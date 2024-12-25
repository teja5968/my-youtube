
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import { Provider } from 'react-redux';

import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

const appRouter = createBrowserRouter([{

  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<MainContainer/>,
    },
    {
      path:"/watch",
      element:<WatchPage/>
    }
  ]
}]);

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
      <RouterProvider router = {appRouter}/>
      <Body />

    
    </div>
    </Provider>
  );
}

export default App;
