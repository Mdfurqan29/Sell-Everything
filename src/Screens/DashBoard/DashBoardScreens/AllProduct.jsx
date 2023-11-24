import axios from "axios";
import { useState , useEffect } from "react";
import Card from "../../../componants/card/card.jsx";
import Img from "../../../componants/image/img";
import Ratings from "../../../componants/rating/Rating";
import {Box, Stack, Typography} from "@mui/material";
import Button from "../../../componants/Button/Button.jsx";
import {ref, onChildAdded} from 'firebase/database';
import { DATABASE } from "../../../config/Firebase/FirebaseConfig.js";
import Loading from '../../../componants/Loading/Loading.jsx'
import {useNavigate} from 'react-router-dom'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

const AllProduct = () => {
    let [Data , setData] = useState([])
    let[Loadings,setLoading] = useState(false)
    let [cart,setCart] = useState([])
let navigation = useNavigate()
    function getDataFromDatabase(){
      var reference = ref(DATABASE,`products/`)
      onChildAdded(reference,function(data){
        rander(data.val())
      })
    }
  const rander = (data)=>{
    if(data){
      setLoading(true)
      setData(pre=>([...pre,data]))
    }
      }
  useEffect(()=>{
  getDataFromDatabase()
      },[])

      const Carts = ()=>{
navigation('product')
      }

      const addCarts = (e)=>{
        setCart(pre=>[...pre,e])

      }
      console.log(cart);
          useEffect(()=>{
        localStorage.setItem('productLocal',JSON.stringify(cart))
          },[cart])
  return<>
     <Stack flexDirection="row" sx={{position:"absolute",right:"13px",top:"75px", alignItems:"center",cursor:"pointer" ,color:"#1976d2"}}>
<LocalGroceryStoreIcon onClick={Carts}/>
<Typography> <span>{cart.length}</span></Typography>
    </Stack>
   <Stack> 
    <Box sx={{
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    justifyContent: "center",
    alignItems:"center",
    p: "2px",
    mt:2
  }}>
 
{
Loadings ? Data.map((e,i)=>{
  return <Card key={e.id}  lable={<>
  <Img lable={e.imgURL}/>
  <Ratings/>
  <Typography sx={{ fontSize: "20px" }}>
                  {e.Cetogery}
             </Typography>
             <Typography sx={{ fontSize: "13px" }}>
                 {e.tittle.slice(0, 20) + "...."} 
                </Typography>
  <Typography sx={{fontSize:"13px"}} variant="p">Seller Name : {e.SellerName}</Typography>

                <Typography sx={{ fontSize: "10px" }}>
               {e.description.slice(0, 95) + "....."}
                </Typography>
                <Button onClick={()=>addCarts(e)}  sx={{mt:1}} label={e.price+" $"}/>
  </>
  }/>
}) : <Loading/>
}
  </Box></Stack></>

}
export default AllProduct
