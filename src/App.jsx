import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.css';

import './App.css'
import { RouterProvider } from 'react-router-dom';
import router from './routes/Routes';


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
