import Calculator from "./calculator"
import DataFlow from "./DataFlow"
import InputComponent from './Hooks'
import MyVideoComponent from "./Video.jsx"
import { BrowserRouter, Route, Routes, Link, Form} from "react-router-dom";
import DessertsList from "./Desserts";
import dessertsList from './DessertsData.jsx';
import UncontrolledInput from "./UncontrolledInput";



function App() {

  return (
    <div className="w-screen h-screen gap-6 bg-gray-900 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-serif py-2 text-gray-100 font-bold">Course Practice</h1>
      <BrowserRouter>
      <nav className="text-gray-200 flex flex-row gap-10">
        <Link to="/dataFlow">DataFlow</Link>
        <Link to="/inputComponent">InputComponent</Link>
        <Link to="/myVideoComponent">MyVideoComponent</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to='/basicList'>BasicList</Link>
        <Link to='/uncontrolledInput'>UncontrolledInput</Link>
      </nav>
        <Routes>
          <Route path='/dataFlow' element={<DataFlow />} />
          <Route path='/inputComponent' element={<InputComponent />} />
          <Route path='/myVideoComponent' element={<MyVideoComponent />} />
          <Route path='/calculator' element={<Calculator />} />
          <Route path='/basicList' element={<DessertsList data={dessertsList} />} />
          <Route path='/uncontrolledInput' element={<UncontrolledInput />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}


export default App;
