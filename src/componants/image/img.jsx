
import { Box } from "@mui/material"
const Img = ({lable,onClick}) => {
    
    return <Box onClick={onClick} component="img" src={lable} sx={{width:"220px", borderRadius:"10px 10px 0px 0px ",height:"180px" }}/>
}

export default Img
