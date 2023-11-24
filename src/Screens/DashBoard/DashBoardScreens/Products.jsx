import axios from "axios";
import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import CardP from "../../../componants/CardP/CardP";
import Card from "../../../componants/card/card";
import Img from "../../../componants/image/img";
import Ratings from "../../../componants/rating/Rating";
import {Box, Stack, Typography} from "@mui/material";
import Loading from "../../../componants/Loading/Loading";
import Button from "../../../componants/Button/Button";
const Products = () => {
    let [Data , setData] = useState([])
    let [loadings , setLoading] = useState(false)

 useEffect(()=>{
setData(JSON.parse(localStorage.getItem("productLocal")))
setLoading(true)
 },[])
console.log(Data);
return <Box sx={{
  mt: "10px",
  p: "2px",
  width: "100%",
  display:"flex",
  flexDirection:"column",
  alignItems:"center"
}}>
  {
   Data.map((e, i) => {
      return <Box  key={i} sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        border: "1px solid rgba(128, 128, 128, 0.557)",
        padding: 1,
        borderRadius: "10px",
        m: 1,
        pl:0

      }}>
        <Box component="img" src={e.imgURL} sx={{width:{xs:"100px",sm:"120px" ,md:"150px" ,lg:"170px" , xl:"170px"}, height:{xs:"150px",sm:"170px" ,md:"190px" ,lg:"210px" , xl:"210px"} , ml:1 , borderRadius:"5px"}}/>

        <Box sx={{ ml: 3 }}>
        <Typography sx={{ fontSize: "15px" }}>
            {"seller Name : "+e.SellerName}
          </Typography>
          <Typography sx={{ fontSize: "15px" }}>
            {"seller Email : "+e.SellerEmail}
          </Typography>
          <Typography sx={{ fontSize: "20px" }}>
            {e.Cetogery}
          </Typography>
        <Ratings/>
          <Typography sx={{ fontSize: "13px" }}>
            {e.tittle}
          </Typography>
          <Typography sx={{ fontSize: "10px" }}>
            {e.description}
          </Typography>
          <Button sx={{mt:1}} label={e.price+" $"}/>
          
        </Box>
      </Box>
    })
  }
</Box>
}
export default Products




                  
// return <Stack> 
// <Box sx={{
// display: "flex",
// flexWrap: "wrap",
// gap: "10px",
// justifyContent: "center",
// alignItems:"center",
// p: "2px",
// mt:2
// }}>

// {
// loadings ? Data.map((e,i)=>{
// return <Card key={e.id}  lable={<>
// <Img lable={e.imgURL}/>
// <Ratings/>
// <Typography sx={{ fontSize: "20px" }}>
//               {e.Cetogery}
//          </Typography>
//          <Typography sx={{ fontSize: "13px" }}>
//              {e.tittle.slice(0, 20) + "...."} 
//             </Typography>
// <Typography sx={{fontSize:"13px"}} variant="p">Seller Name : {e.SellerName}</Typography>

//             <Typography sx={{ fontSize: "10px" }}>
//            {e.description.slice(0, 95) + "....."}
//             </Typography>
//             <Button sx={{mt:1}} label={e.price+" $"}/>
// </>
// }/>
// }) : <Loading/>
// }
// </Box></Stack>
