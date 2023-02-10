import './Main.css'
import  {AiFillCloseCircle} from 'react-icons/ai'
import { StyledComponent } from '@emotion/styled'
import styled from 'styled-components'
const Modal=(props)=>{
    const close=()=>{
        let modal=document.getElementById('modal')
        console.log('style',modal)

        modal.classList.add('hiden')
        props.setClick('')
    }
   
    if(props.click!==''){
    return <div className='Modal container' id='modal'>
        <div className='row1' >
        <AiFillCloseCircle className='cursor' onClick={close}></AiFillCloseCircle>
        </div>
        <div className='modalBody' >
            <div className='row'>
                <div className='col-12 col-sm-5'>
                    <img className='img-fluid size' src={props.show.volumeInfo.imageLinks.thumbnail} alt=''/>
                </div>
                <div className='col-12 col-sm-5'>
                    
                   <h2> { props.show.volumeInfo.title}</h2>
                   <a href={props.show.saleInfo.buyLink}><button className='btn btn-primary'>{props.show.saleInfo.saleability}</button> </a>
                    
                </div>
            </div>

            <div className='row'>

                <div className='col-12 col-sm-3'>
                <h5>published Date: { props.show.volumeInfo.publishedDate}</h5>
                </div>   
                <div className='col-12 col-sm-3'>
                    <h5>page Count: { props.show.volumeInfo.pageCount}</h5>
                </div>  
                <div className='col-12 col-sm-5'>
                    <h5>authors: { props.show.volumeInfo.authors}</h5>
                </div> 
            </div>

            <div className='row '>
              
                <div className='col-12 footer' >
                    {props.show.volumeInfo.description}
                    <p>-------------</p>
                </div>
            </div>
        </div>
        
        
    </div>
    }
}
export default Modal