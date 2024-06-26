import React from 'react'
import ButtonCopy from './components/ButtonCopy'
import ChangeName from './components/ChangeName'
import FillText from './components/FillText'
import ColorList from './components/ColorList'

const App = () => {
  return (
    <div>
      {/* <Button /> */}
      <ChangeName />
      <FillText />
      <ButtonCopy />
      <ColorList />
    </div>
  )
}

export default App
