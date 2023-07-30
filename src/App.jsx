import Content from "./components/content/Content"
import Navbar from "./components/header/Navbar"

function App() {

  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <div className="bg-[#f9f9f9]">
        <Content />
      </div>
    </>
  )
}

export default App
