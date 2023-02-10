import './Main.css'
import Card from './Card'
import Modal from './Modal'
import { useState } from 'react'
import { render } from 'react-dom'
import Loader from './Loader'

const Main=(props)=>{
    const [click,setClick]=useState('')
    const [show,setShow]=useState('')
    const [position,setPosition]=useState(10)
    const more=(item)=>{
       setShow(item)
       setClick('y')
        // let itemPosition=document.getElementById(id).offsetTop
        // console.log(itemPosition)
        // setPosition(itemPosition)  
    }
    return <div className="container" id='main'> 
        <Modal id='modal' click={click} setClick={setClick}  show={show} position={position} ></Modal>
        {props.arrCard.map((item,index)=>{
            let title=item.volumeInfo.title
            let image=item.volumeInfo.imageLinks.thumbnail
            let language=item.volumeInfo.language
            let categ=item.volumeInfo.categories
            return <>
            <Card key={index} title={title} image={image} language={language} categ={categ} id={index} more={more} item={item} className='card'/>
            </> 
            } )}
    </div>
}
export default Main