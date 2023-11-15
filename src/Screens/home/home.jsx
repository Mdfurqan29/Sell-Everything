import { useNavigate } from "react-router-dom";

const Home = () => {

let navigation = useNavigate()

const change = ()=>{
navigation('/products')
}

  return <button onClick={change}>Go Products</button>
}

export default Home;
