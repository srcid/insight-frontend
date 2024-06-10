import Header from "./components/header"
import Footer from "./components/footer"
import { BrowserRouter } from "react-router-dom"
import Routes from "./routes"


function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex">
          <div className="container py-8">
            <Routes />
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
