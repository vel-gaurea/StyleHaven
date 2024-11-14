import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import ShopContextProvider from './context/ShopContext.jsx';
import Cursor from './animations/Cursor';
import { useLocation } from 'react-router-dom';

function MainApp() {
  const location = useLocation();
  
  return (
    <>
      {/* {location.pathname === '/' && <Cursor />} */}
      <Cursor/>
      <ShopContextProvider>
        <App />
      </ShopContextProvider>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>
);
