import Home from "../Screens/home/home.jsx"
import Error from "../ErrorRouter/Error.jsx"
import Products from "../Screens/Products/Products.jsx"
import AllProduct from "../Screens/AllProducts/AllProduct.jsx"


export const RouterList = [{
    path:'/',
    element:<Home/>
},
{
    path:'/product/:id',
    element:<Products/>
},
{
    path:'/products',
    element:<AllProduct/>
},
{
    path:'*',
    element:<Error/>
}
]
