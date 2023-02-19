import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter } from 'react-router-dom';
import { PagesRouter } from './routes/PagesRouter';

import { Provider } from 'react-redux';

import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <BrowserRouter className='top'>
          <Header />       
          <PagesRouter />        
        </BrowserRouter> 
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
 