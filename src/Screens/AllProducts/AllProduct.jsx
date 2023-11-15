import axios from "axios";
import { useState , useEffect } from "react";
import CardP from "../../componants/CardP/CardP";
import Card from "../../componants/card/card";
import Img from "../../componants/image/img";
import Ratings from "../../componants/rating/Rating";
import {Typography} from "@mui/material";
import { useNavigate } from "react-router-dom";

const AllProduct = () => {
    let [Data , setData] = useState()
    let navigation = useNavigate()
  const getData = async ()=>{
    try{
      let a = await axios.get(`https://fakestoreapi.com/products/`)
      setData(a.data)
  
    }catch(error){
  console.log(error)
    }
  }
  
  useEffect(()=>{
  getData()
  },[])
  const change = (i)=>{
navigation(`/product/${i+1}`)
  }

  return <CardP lable={ Data ? 
  Data.map((e,i)=>{
    return <Card  lable={<>
    <Img onClick={()=>change(i)} lable={e.image}/>
    <Ratings/>
    <Typography sx={{ fontSize: "20px" }}>
                    {e.category}
               </Typography>
               <Typography sx={{ fontSize: "13px" }}>
                   {e.title.slice(0, 20) + "...."} 
                  </Typography>
                  <Typography sx={{ fontSize: "10px" }}>
                 {e.description.slice(0, 95) + "....."}
                  </Typography>
    </>
    }/>
  }) : "Loading...."
  }/>
}
export default AllProduct
