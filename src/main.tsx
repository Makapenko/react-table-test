import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux';
import { setupStore } from './store/store'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';

const store = setupStore()

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='/page/1' />
  },
  {
    path: '/page/:page',
    element: <App />,
  },
  {
    path: '*',
    element: <Navigate to='/page/1' />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
