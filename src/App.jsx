import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
function App() {


  return (
    <>
    <div className="App-container">
      
    <Sidebar></Sidebar>
    <div className="content">

    <Header></Header>
      <Footer></Footer>
    </div>
    </div>
    </>
  )
}

export default App
