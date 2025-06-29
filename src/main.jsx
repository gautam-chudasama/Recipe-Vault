// favourite functionality and usestate for live change

import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Recipecontext from './context/Recipecontext.jsx';

createRoot(document.getElementById('root')).render(
    <Recipecontext>
        <BrowserRouter>
            <App />
            <ToastContainer position='top-center' />
        </BrowserRouter>
    </Recipecontext>
);