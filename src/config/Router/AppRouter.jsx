import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import { RouterList } from "../../utils/RouterList.jsx";

const AppRouter = () => {
  return <Router>
    <Routes>
        {
            RouterList.map((e,i)=>{
              return <Route key={i} path={e.path} element={e.element}/>
            })
        }
    </Routes>
  </Router>
}

export default AppRouter
