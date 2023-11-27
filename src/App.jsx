import Dog from "./DataFlow"
import InputComponent from './Hooks'
import MyVideoComponent from "./Video.jsx"



function App() {

  return (
    <div className="min-w-screen min-h-screen gap-6 bg-gray-900 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-serif py-2 text-gray-100 font-bold">Course Practice</h1>
      <Dog />
      <InputComponent />
      <MyVideoComponent />
    </div>

  )
}


export default App
