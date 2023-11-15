import axios from "axios";
import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import CardP from "../../componants/CardP/CardP";
import Card from "../../componants/card/card";
import Img from "../../componants/image/img";
import Ratings from "../../componants/rating/Rating";
import {Typography} from "@mui/material";

const Products = () => {

    const {id} = useParams()
    let [Data , setData] = useState([])
    let [loading , setLoading] = useState(true)

  const getData = async ()=>{
    try{
      let a = await axios.get(`https://fakestoreapi.com/products/${id}`)
      setData(a.data)
  setLoading(false)
    }catch(error){
  console.log(error)
    }
  }

  useEffect(()=>{
  getData()
  },[])

  return <CardP lable={ loading ? "Loading...." : <Card lable={<>
    <Img lable={Data.image}/>
    <Ratings/>
    <Typography sx={{ fontSize: "20px" }}>
                    {Data.category}
               </Typography>
               <Typography sx={{ fontSize: "13px" }}>
                   {Data.title.slice(0, 20) + "...."} 
                  </Typography>
                  <Typography sx={{ fontSize: "10px" }}>
                 {Data.description.slice(0, 95) + "....."}
                  </Typography>
    </>}/>  }/> 

}
export default Products


                  
                   