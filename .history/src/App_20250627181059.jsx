import { Home } from "lucide-react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NotFound from "./pages/NotFound"

function App() {
 
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="*" />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
