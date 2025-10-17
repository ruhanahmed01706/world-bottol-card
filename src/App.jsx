
import { Suspense } from 'react'
import './App.css'
import Worlds from './world_components/components/Worlds'

const bottolsFech = fetch('./bottols.json')
.then(res => res.json())
// console.log(bottolsFech);

function App() {

  return (
    <>
      
      <Suspense>
        <Worlds bottolsFech ={bottolsFech}></Worlds>
      </Suspense>

    </>
  )
}

export default App
