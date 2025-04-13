import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router'
import Layout from './Layout'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import SingleProduct from './pages/SingleProduct'

const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout />,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'about',
                element:<About />
            },
            {
                path:'contact',
                element:<Contact />
            },
            {
                path:'products',
                element:<Products />
            },
            {
                path:'product/:id',
                element:<SingleProduct />
            }
        ]
    }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />  
)
