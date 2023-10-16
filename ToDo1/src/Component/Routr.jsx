import { Routes ,Route } from "react-router-dom";
import Card from "./Card";
import ShowToDo from "./ShowToDo";
function Routr()
{
    return <div>
        <Routes>
           <Route path="/Edit" element={<Card></Card>} ></Route>
           <Route path="/" element={<ShowToDo></ShowToDo>} ></Route>
        </Routes>
    </div>
}

export default Routr