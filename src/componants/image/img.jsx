
import { Box } from "@mui/material"
const Img = ({lable,onClick}) => {
    
    return <Box onClick={onClick} component="img" src={lable} sx={{width:"200px" , height:"180px" }}/>
}

export default Img
