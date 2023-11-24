import { Stack, Typography} from '@mui/material'
import  { useState } from 'react'
import Input from '../../../componants/input/Input'
import Button from '../../../componants/Button/Button'
import {auth} from '../../../config/Firebase/FirebaseConfig.js'
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import CancelIcon from '@mui/icons-material/Cancel';

const SinIn = () => {
    let [InputData , setInputData] = useState({})
    let navigation = useNavigate()
    let [Error ,setError] = useState("")

    const getInpValue = (e)=>{

setInputData(pre=>({
    ...pre ,
    [e.target.id] : e.target.value
    }))

    }

    const SingIn = async ()=>{
            try{
            let s = await signInWithEmailAndPassword(auth , InputData.Email,InputData.Password)
navigation('AddProducts')
            }catch(error){
         setError(
              {
                  ErrorName : "Some Thing Wrong",
                  icon : <CancelIcon sx={{fontSize:"17px"}}/>
              }
          )
            }
    }
const SingUp = ()=>{
  navigation('SingUp')
}
  return (
    <Stack width="100%" height="100vh" justifyContent="center" alignItems="center" >
        <Stack width="300px">
        <Stack>
            <Typography sx={{color:"#1976d2"}} variant='h3'>Log-In</Typography>
        </Stack>
        <Stack gap="10px">
            <Input id="Email" placeholder="Email" label="Email" onChage={getInpValue}/>
            <Input id="Password"  placeholder="Password" label="Password" onChage={getInpValue} />
        </Stack>

        <Stack flexDirection="row" alignItems="center" sx={{mt:'2px' , color:"red"}} width={"100%"}>
        <Typography variant='span' sx={{fontSize:12}}>{Error.ErrorName}</Typography>
        <Typography sx={{fontSize:"0px"}}>{Error.icon}</Typography>
        </Stack>

        <Stack flexDirection={'row'} alignItems="center" justifyContent={'space-between'}>
        <Button  label="log-In" sx={{mt:2 }} onClick={SingIn}/>
        <Typography sx={{cursor:"pointer" , color:"#1976d2"}} variant='p' onClick={SingUp}>Create a account?</Typography>
        </Stack>
        </Stack>
    </Stack>
  )
}
export default SinIn;