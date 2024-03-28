
import Picker from 'react-mobile-picker'
import './thumbviewscroll.css'
const imgList =  [{id:1, title:'Tero'}, {id:2, title: 'Underme'}, {id:3, title:'Mopy'}, {id:4, title: 'Cupid'}, {id:5, title: 'DreamBaby'}, {id:6, title: 'Richer'}]


function ThumbViewScroll({pickerValue, handleSetValue}) {

  return (
    <div className='scroll-list-wrapper'>
    <Picker value={pickerValue} onChange={handleSetValue} wheel="normal" className="picker-scroll">
        <Picker.Column key={name} name='thumbId'>
          {imgList.map(option => (
            <Picker.Item key={option.id} value={option.id}>
             {({ selected }) => (
            /* Use the `selected` state ti conditionally style the selected item */
            <div style={{ color: selected ? 'red' : 'black' }}>
              <p style={{fontSize:'30px'}}>{option.title}</p>
            </div>
          )}
            
            </Picker.Item>
          ))}
        </Picker.Column>

    </Picker>
    </div>

  )
}

export default ThumbViewScroll;