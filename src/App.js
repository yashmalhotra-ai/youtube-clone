import { Provider } from 'react-redux';
import './App.css'
import Body from './Components/Body';
import Header from './Components/Header';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './Components/MainContainer';
import VideoPlayer from './Components/VideoPlayer';


const appRouter = createBrowserRouter([{
  path: '/',
  element: <Body />,
  children: [{
    path: '/',
    element: <MainContainer />,
  },
  {
    path: 'videoplayer',
    element: <VideoPlayer />,
  }]
}])
function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <RouterProvider router={appRouter} />


      </Provider>
    </>

  );
}

// Head
// Body
//  ->SideBar
//      ->MenuItems
// MainContainer
//  ->Buttons List
//  -> Video Container
//   -> Video Card
// 
export default App;
