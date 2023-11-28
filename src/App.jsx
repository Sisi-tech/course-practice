import Calculator from "./calculator"
import DataFlow from "./DataFlow"
import InputComponent from './Hooks'
import MyVideoComponent from "./Video.jsx"
import { BrowserRouter, Route, Routes, Link, Form} from "react-router-dom";
import DessertsList from "./Desserts";
import dessertsList from './DessertsData.jsx';
import UncontrolledInput from "./UncontrolledInput";
import ControlledInput from "./ControlledInput";
import ControlledForm from "./Form";
import Feedback from "./Feedback";
import Registration from "./Registration";




function App() {

  return (
    <div className="w-screen h-screen gap-6 bg-gray-900 flex flex-col items-center pt-6 pb-4 ">
      <h1 className="text-4xl font-serif py-2 text-gray-100 font-bold">Course Practice</h1>
      <BrowserRouter>
      <nav className="text-gray-200 flex flex-row gap-10">
        <Link to="/dataFlow">DataFlow</Link>
        <Link to="/inputComponent">InputComponent</Link>
        <Link to="/myVideoComponent">MyVideoComponent</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to='/basicList'>BasicList</Link>
        <Link to='/uncontrolledInput'>Uncontrolled Input</Link>
        <Link to='/controlledInput'>Controlled Input</Link>
        <Link to='/form'>Controlled Form</Link>
        <Link to='/feedback'>FeedBack Form</Link>
        <Link to='/registration'>Registration Form</Link>
      </nav>
        <Routes>
          <Route path='/dataFlow' element={<DataFlow />} />
          <Route path='/inputComponent' element={<InputComponent />} />
          <Route path='/myVideoComponent' element={<MyVideoComponent />} />
          <Route path='/calculator' element={<Calculator />} />
          <Route path='/basicList' element={<DessertsList data={dessertsList} />} />
          <Route path='/uncontrolledInput' element={<UncontrolledInput />} />
          <Route path='/controlledInput' element={<ControlledInput />} />
          <Route path='/form' element={<ControlledForm/>} />
          <Route path='/feedback' element={<Feedback />} />
          <Route path='/registration' element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}


export default App;
