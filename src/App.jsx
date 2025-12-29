import Navbar from "./components/Navbar"
import Mainroutes from "./routes/Mainroutes"

const App = () => {
  return (
    <div className="px-20 py-[10%] w-screen min-h-screen bg-gray-800 text-white font-thin">
      <Navbar />
      <Mainroutes />
    </div>
  )
}

export default App