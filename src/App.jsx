import { useState } from 'react'

import ThumbViewScroll from './component/ThumbViewScroll'
import Thumbview from './component/Thumbview'
import './App.css'; 


function App() {
  const [pickerValue, setPickerValue] = useState({thumbId:1})

  const handleSetValue = (value,key) => {
    console.log({value,key})
    setPickerValue(value)
  }
  return (
    <div >
    <Thumbview pickerValue={pickerValue}/>
    <ThumbViewScroll pickerValue={pickerValue} handleSetValue={handleSetValue}/>
    </div>
  )
}

export default App
