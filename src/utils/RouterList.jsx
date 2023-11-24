import Home from "../Screens/home/home.jsx"
import Error from "../ErrorRouter/Error.jsx"
import Products from "../Screens/DashBoard/DashBoardScreens/Products.jsx"
import AllProduct from "../Screens/DashBoard/DashBoardScreens/AllProduct.jsx"
import DashBoard from "../Screens/DashBoard/DashBoard.jsx"
import SingUp from "../Screens/DashBoard/DashBoardScreens/SingUp.jsx"
import SingIn from "../Screens/DashBoard/DashBoardScreens/SingIn.jsx"
import ChackingUser from "../Screens/ChackingUser/ChackingUser.jsx"

export const RouterList = [{
    path:'/',
    element:<ChackingUser/>
},{
    path:'/SingUp',
    element:<SingUp/>
},{
    path:'/login',
    element:<SingIn/>
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
    path:'/Dashboard/*',
    element:<DashBoard/>
},
{
    path:'*',
    element:<Error/>
}
]
