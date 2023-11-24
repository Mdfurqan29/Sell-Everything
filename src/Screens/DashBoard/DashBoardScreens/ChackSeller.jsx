import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../../config/Firebase/FirebaseConfig';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import { Stack } from "@mui/material";


const ChackSeller = () => {

    let navigation = useNavigate()
    const Chack = ()=>{
        onAuthStateChanged(auth, (user) => {
  if (user) {
navigation('AddProducts')
  } else {
    navigation('SingUp')
  }
});
    }

useEffect(()=>{
    Chack()
},[])

return(
<Stack justifyContent="center" alignItems="center" width="100%" height="100vh">
    <CircularProgress/>
</Stack>
)

}
export default ChackSeller

