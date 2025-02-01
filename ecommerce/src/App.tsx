import { RouterProvider } from 'react-router';
import router from './router';
import { PrimeReactProvider } from 'primereact/api';

const App = () => {
  return(
    <PrimeReactProvider value={{ unstyled: true, pt: {} }}>
      <RouterProvider router={router} />
    </PrimeReactProvider>
  )
}

export default App;