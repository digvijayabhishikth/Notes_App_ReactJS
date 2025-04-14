import {Routes,Route} from 'react-router'
import Home from './Pages/Home/Home'
import Archive from './Pages/Archive/Archive'
import Important from './Pages/Important/Important'
import Bin from './Pages/Bin/Bin'

function App() {

  return (
    <div className='w-screen h-screen overflow-hidden flex flex-col'>
      <Routes>
        <Route path="/" element={ <Home/>}></Route>
        <Route path="/archive" element={ <Archive/>}></Route>
        <Route path="/important" element={ <Important/>}></Route>
        <Route path="/bin" element={ <Bin/>}></Route>
      </Routes>
    </div>
  )
}

export default App
