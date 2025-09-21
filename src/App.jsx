
import './App.css'
import navimg from "./assets/logo.png"
import dolar from "./assets/Dollar.png"
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import { Suspense } from 'react'

const fetchPlayers = async () =>{
  const res = await fetch("/public.json")
  return res.json()
}
function App() {

const playersPromise =fetchPlayers()
  return (
    <>
      <div className="navbar max-w-[1200px] mx-auto">
                <div className="flex-1">
                    <a className="text-xl">
                        <img className='w-[60px] h-[60px]' src={navimg} alt="" />
                    </a>
                </div>
                <div className="flex items-center">
                    <span className='mr-1'>6000000000</span>
                    <span className='mr-1'>Coin</span>
                    <img src={dolar} alt="" />
                </div>
            </div>


<Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
  <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
</Suspense>

{/* <SelectedPlayers></SelectedPlayers> */}

    </>
  )
}

export default App
