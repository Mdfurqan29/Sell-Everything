
import { Rating } from "@mui/material";
import { useState } from "react";

const Ratings = () => {
  const [value, setValue] = useState(2);

  return <Rating
  name="simple-controlled"
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
/>
}

export default Ratings
