import { useState, useEffect } from "react";
import { Box, Stack, } from "@mui/material";
import { DB } from "../../Config/FirebaseConfig/FirebageConfig";
import { ref, set, push, onChildAdded } from "firebase/database";
import { Storage } from '../../Config/FirebaseConfig/FirebageConfig'
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL, } from "firebase/storage";
import './UploadProducts.css'


const UploadProducts = () => {
  const [getFirebase, setGetFirebase] = useState([]);
  const [authData, setAuthData] = useState();
  const [imageData, setImageData] = useState('');

  const fileInputHandler = (e) => {
    const file = e.target.files[0];
    
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageData(reader.result);
      };
  
      reader.readAsDataURL(file);
    }

    setAuthData((prev) => ({
      ...prev,
      productImg: file,
    }));
  };


  const submitData = () => {
    
    const obj = {
      tittle: authData.productTitle,
      description: authData.productDescription,
      price: authData.productPrice,
      productImg: authData.productImg,
    };
    console.log(obj.tittle, obj.description, obj.price, obj.productImg);

    const keyRef = ref(DB)
    const key = push(keyRef).key
    obj.id = key

    const ImageStorageRef = storageRef(Storage, `images/${obj.id}.jpg`)
    uploadBytes(ImageStorageRef).then(function (success) {
      getDownloadURL(success.ref).then((downloadURL) => {
        obj.imgURL = downloadURL
        const reference = ref(DB, `products/${obj.id}`)
        set(reference, obj)
      });
    }).catch(function (err) {
      console.error(err)
    })
  }


  const getDataFromDatabase = function () {
    let reference = ref(DB, 'products');
    onChildAdded(reference, function (data) {
      setGetFirebase((prev) => [ ...prev ,  data.val()]);
    });
  };

console.log(getFirebase.imgURL);
  useEffect(() => {
    getDataFromDatabase()
  }, [])






  return (
    <>

      <section className="sec">

        <div>
          <input className="inp" onChange={fileInputHandler} placeholder="Enter Title..." type="text" name="" id="productTitle" />
        </div>
        <div>
          <input className="inp" onChange={fileInputHandler} placeholder="Enter des..." type="text" name="" id="productDescription" />
        </div>
        <div>
          <input className="inp" onChange={fileInputHandler} type="text" placeholder="Enter Price..." name="" id="productPrice" />
        </div>
        <div>
          <input className="inp" onChange={fileInputHandler} type="file" name="" id="productImg" />
        </div>
        <div>
          <button style={{ height: "40px", width: "130px", fontSize: "20px", borderRadius: "10px", border: "none", backgroundColor: "skyblue", color: "white" }} className="bttn" onClick={submitData}>Submit</button>
        </div>

      </section>

      <Stack
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "row",
          // marginTop: "3vh",
          flexWrap: "wrap",
          textAlign: "center",
        }}
      >
        {getFirebase.map((e, i) => (
          <Box
            sx={{
              marginTop: "10px",
              boxShadow: "0 0 15px black",
              border: "2px solid black",
              width: "240px",
              borderRadius: "10px",
              height: "300px",
            }}
            key={i}
          >
            <Box
              sx={{
                height: "140px",
                width: "230px",
                margin: "3px",
                padding: "10px",
                borderRadius: "10px",
                border: "1px solid black"
              }}
            >
              <img
                className="img-product"
                style={{ borderRadius: "10px" }}
                src={e.imgURL}
                alt={e.tittle}
                width="100%"
                height="100%"
              />
            </Box>

            <Box
              sx={{
                fontSize: "20px",
                margin: "3px",
                textAlign: "center",
                width: "230px",
              }}
            >
              {e.description}
            </Box>
            <Box
              sx={{
                fontSize: "20px",
                margin: "3px",
                textAlign: "center",
                width: "230px",
              }}
            >
              {e.tittle}
            </Box>
            <Box
              sx={{
                fontSize: "20px",
                margin: "3px",
                textAlign: "center",
                width: "230px",
              }}
            >
              {e.price}
            </Box>
            <Box sx={{ marginBottom: "8px" }}>
              <button style={{ height: "40px", width: "130pxs", borderRadius: "10px", border: "none", backgroundColor: "cadetblue", color: "white" }} >ADD TO CART</button>
            </Box>
          </Box>
        ))}
      </Stack>


    </>
  )
}
export default UploadProducts;