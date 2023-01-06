import Aos from 'aos';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes';
function App() {

  // const firstLoading = document.getElementById('my-own-spinner');
  // if (firstLoading) {
  //   setTimeout(() => {
  //     firstLoading.style.display = "none";
  //   }, 5000);
  // }
  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={routes}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
