import { Stack, Typography } from '@mui/material'
import { useState } from 'react'
import Input from '../../../componants/input/Input.jsx'
import Button from '../../../componants/Button/Button'
import { auth } from '../../../config/Firebase/FirebaseConfig.js'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import CancelIcon from '@mui/icons-material/Cancel';
import {ref, set,} from 'firebase/database';
import { DATABASE } from '../../../config/Firebase/FirebaseConfig.js'
const SingUp = () => {
    let [InputData, setInputData] = useState({})
    let navigation = useNavigate()
    let [Error, setError] = useState("")

    const getInpValue = (e) => {

        setInputData(pre => ({
            ...pre,
            [e.target.id]: e.target.value
        }))

    }

    const SingUp = async () => {
        if (InputData.Password === InputData.ConfirmPassword) {
            try {
                let s = await createUserWithEmailAndPassword(auth, InputData.Email, InputData.Password)
                let rafrance = ref(DATABASE,`users/${s.user.uid}`)
                set(rafrance,InputData)
                navigation('login')
            } catch (error) {
                alert(error)
            }
        } else {
            setError(
                {
                    ErrorName: "Confirm Password Not Same",
                    icon: <CancelIcon sx={{ fontSize: "17px" }} />
                }
            )
        }
    }
    const SingIn = () => {
        navigation('login')
    }
    return (
        <Stack width="100%" height="100vh" justifyContent="center" alignItems="center" >
            <Stack width="300px">
                <Stack>
                    <Typography sx={{ color: "#1976d2" }} variant='h3'>Sign-Up</Typography>
                </Stack>
                <Stack gap="10px">
                <Input id="UserName" placeholder="User Name" label="User Name" onChage={getInpValue} />
                    <Input id="Email" placeholder="Email" label="Email" onChage={getInpValue} />
                    <Input id="Password" placeholder="Password" label="Password" onChage={getInpValue} />
                    <Input id="ConfirmPassword" placeholder="Confirm Password" label="Confirm Password" onChage={getInpValue} />
                </Stack>

                <Stack flexDirection="row" alignItems="center" sx={{ mt: '2px', color: "red" }} width={"100%"}>
                    <Typography variant='span' sx={{ fontSize: 12 }}>{Error.ErrorName}</Typography>
                    <Typography sx={{ fontSize: "0px" }}>{Error.icon}</Typography>
                </Stack>

                <Stack flexDirection={'row'} alignItems="center" justifyContent={'space-between'}>
                    <Button label="Sign-Up" sx={{ mt: 2 }} onClick={SingUp} />
                    <Typography sx={{ cursor: "pointer", color: "#1976d2" }} variant='p' onClick={SingIn}>I have a account?</Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default SingUp
