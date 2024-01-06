
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Maincomponents from './Components/Maincomponents';
import mystore from './redux/store';  
import { Provider } from 'react-redux';


function App() {
  console.log("App.js:", mystore.getState());
  return (
    <Provider store={mystore}>
    <BrowserRouter>
      <Maincomponents />
    </BrowserRouter>
    </Provider>



  );
}

export default App;
