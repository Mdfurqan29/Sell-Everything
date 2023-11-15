import { Box } from "@mui/material"

const CardP = ({lable}) => {
  return <Box sx={{
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    justifyContent: "center",
    alignItems:"center",
    p: "2px",
    
  }}>
{lable}
  </Box>
}

export default CardP
