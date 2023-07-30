import Content from "./components/content/Content"
import Footer from "./components/footer/Footer"
import Navbar from "./components/header/Navbar"

function App() {

  return (
    <>
      <div className="top-0 fixed w-full bg-white">
        <Navbar />
      </div>
      <div className="bg-[#f9f9f9]">
        <Content />
      </div>
      <Footer />
    </>
  )
}

export default App
