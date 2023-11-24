import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Input from '../../../componants/input/Input'
import Button from '../../../componants/Button/Button'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import {  signOut } from "firebase/auth";
import {auth , STORAGE} from '../../../config/Firebase/FirebaseConfig.js'
import { useNavigate } from 'react-router-dom';
import { DATABASE } from '../../../config/Firebase/FirebaseConfig.js';
import { onAuthStateChanged } from "firebase/auth";
import {ref, set, push, onChildAdded} from 'firebase/database';
import FileUpload from '../../../componants/FileUploadImg/FileUploadImg.jsx';
import { ref as storageRef, uploadBytes, getDownloadURL, } from "firebase/storage";
import Loading from '../../../componants/Loading/Loading.jsx';
import Alert from '../../../componants/alert/Alert.jsx'

const AddProducts = () => {
let navigation = useNavigate()
let [Data , setData] = useState([])
let [user , setUser] = useState()
let [localImg , setlocalImg] = useState()
let [imgData, setImgData] = useState("");
let [StorageDataSend , setStorageDataSend] = useState([])
let [load,setLoad] = useState(false)
  const getInpValue = (e) => {
    setStorageDataSend(pre=>({...pre,
[e.target.id] : e.target.value,
SellerName:Data[3],
SellerEmail:Data[1],
    }))
    
  }

const Chack = ()=>{
    onAuthStateChanged(auth, (user) => {
if (user) {
setUser(user.uid)
}
});
}
useEffect(()=>{
Chack()
},[])

  const logout = async ()=>{
    try{
      let a = await signOut(auth)
      navigation('login')
    }catch(e){
  alert("Nahi hoga Logout Kiu ky Tera Net Kharab Ha")
    }
  }

  function getDataFromDatabase(){
    var reference = ref(DATABASE,`users/${user}`)
    onChildAdded(reference,function(data){
      rander(data.val())
    })
  }
const rander = (data)=>{
  if(data){
    setLoad(true)
    setData(pre=>([...pre,data]))
  }
    }

useEffect(()=>{
getDataFromDatabase()
    },[user])

    const fileHandler = (e) => {
      setImgData(e.target.files[0]);
      if (e.target.files[0]) {
        setlocalImg(URL.createObjectURL(e.target.files[0]));
      }
      const file = e.target.files[0];
      setStorageDataSend((prev) => ({
        ...prev,
        productImg: file,
      }));
    };

    const AddDataInStorage = ()=>{
      const obj = {
        Name:StorageDataSend.ProductName,
        tittle: StorageDataSend.ProductTitle,
        description: StorageDataSend.ProductDiscription,
        Cetogery:StorageDataSend.ProductCetogery,
        price: StorageDataSend.ProductPrice,
        productImg: StorageDataSend.productImg,
        SellerName: StorageDataSend.SellerName,
        SellerEmail: StorageDataSend.SellerEmail
      };
      const keyRef = ref(DATABASE)
      const key = push(keyRef).key
      obj.id = key
      console.log(obj);
  
      const ImageStorageRef = storageRef(STORAGE, `images/${obj.id}.jpg`)
      uploadBytes(ImageStorageRef,obj.productImg).then(function (success) {
        getDownloadURL(success.ref).then((downloadURL) => {
          obj.imgURL = downloadURL
          const reference = ref(DATABASE, `products/${obj.id}`)
          set(reference, obj)
          console.log("done");
          navigation('allproducts')
        });
      }).catch(function (err) {
        console.error(err)
      })

      }
  return (

    <Stack >
      {
        load ? <Stack flexDirection="row" justifyContent="space-between">
        <Stack>
          <Stack flexDirection="row" alignItems="center" gap={1}><PersonIcon sx={{ color: "#1976d2" }} /> <Typography variant='p' sx={{ mt: "5px" }}>{Data[3]}</Typography> </Stack>
          <Stack flexDirection="row" alignItems="center" gap={1}><EmailIcon sx={{ color: "#1976d2" }} />  <Typography variant='p' sx={{ mt: "5px" }}>{Data[1]} </Typography></Stack>
        </Stack>
        <Stack width="100px">
          <Button label="LogOut" onClick={logout}/>
          </Stack>
      </Stack> : <Loading/>
      }
      
      <Stack width="100%" height="100Vh" alignItems="center">
        <Typography variant="h3" sx={{color:"#1976d2"}}>Add Product Details....</Typography>
        <Stack gap="10px" width="90%">
          <Input id="ProductName" placeholder="Product Name" label="Product Name" onChage={getInpValue} />
          <Input  id="ProductTitle" placeholder="Product Title" label="Product Title" onChage={getInpValue} />
          <Input id="ProductCetogery" placeholder="Product Cetogery" label="Product Cetogery" onChage={getInpValue} />
          <Input id="ProductDiscription" placeholder="Product Discription" label="Product Discription" onChage={getInpValue} />
          <Input id="ProductPrice" placeholder="Product Price" label="Product Price" onChage={getInpValue} />
          {localImg && (
          <Box>
            <img src={localImg} width={"100%"} alt="productImg" />
          </Box>
        )}
          <FileUpload  onChange={fileHandler}>
            {localImg ? "Change Product Image" : "Add Product Image"}
          </FileUpload>
          <Button onClick={AddDataInStorage} label="Add Product..." />
        </Stack>
      </Stack>
    </Stack>
  )
}

export default AddProducts
