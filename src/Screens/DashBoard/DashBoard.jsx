import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { BrowserRouter as Router , Routes , Route, useNavigate } from 'react-router-dom';
import AllPrduct from '../DashBoard/DashBoardScreens/AllProduct'
import SingUp from './DashBoardScreens/SingUp';
import SingIn from '../DashBoard/DashBoardScreens/SingIn'
import AddProducts from './DashBoardScreens/AddProducts';
import ChackSeller from './DashBoardScreens/ChackSeller';
import Products from './DashBoardScreens/Products';


const drawerWidth = 240;
const DashBoard = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

let path = [<ChackSeller/>,<AddProducts/>,<SingUp/>,<SingIn/>]
let path1 = [<AllPrduct/>]
const DashBoardRouterList = [
    {
Name:"All Products",
path:"allproducts",
element:path1.map((e,i)=>e)
},
{
    Name:"Seller",
    path:"seller",
    element:path.map((e,i)=>e)
},]
const navigation = useNavigate()
const setPage = (p)=>{
   navigation(p)
}

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {DashBoardRouterList.map((e, i) => (
          <ListItem key={i} disablePadding>
            <ListItemButton onClick={()=>setPage(e.path)}>
              <ListItemIcon >
                {i % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={e.Name} />
            </ListItemButton >
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );
  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders">
          <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}>
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open>
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Routes>
            <Route path='allproducts/*' element={<AllPrduct/>}/>
          <Route path='allproducts/product' element={<Products/>}/>
            <Route path='Seller' element={<ChackSeller/>}/>
            <Route path='seller/login' element={<SingIn/>}/>
            <Route path='seller/*' element={<SingUp/>}/>
            <Route path='seller/AddProducts' element={<AddProducts/>}/>
            <Route path='seller/login/AddProducts' element={<AddProducts/>}/>
            <Route path='seller/AddProducts/allproducts' element={<AllPrduct/>}/>
        </Routes>
      </Box>
    </Box>
  );
}
export default DashBoard;