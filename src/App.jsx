import {Routes,Route} from 'react-router'
import Home from './Pages/Home/Home'
import Archive from './Pages/Archive/Archive'
import Important from './Pages/Important/Important'
import Bin from './Pages/Bin/Bin'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={ <Home/>}></Route>
        <Route path="/archive" element={ <Archive/>}></Route>
        <Route path="/important" element={ <Important/>}></Route>
        <Route path="/bin" element={ <Bin/>}></Route>
      </Routes>
    </>
  )
}

export default App
