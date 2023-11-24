import { Box } from "@mui/material"

const Card = ({lable,onClick}) => {
  return <Box sx={{
    width: "240px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid rgba(128, 128, 128, 0.557)",
    padding: "10px",
    borderRadius: "10px",
    cursor:"pointer"
  }} onClick={onClick}>{lable}</Box>
}

export default Card
