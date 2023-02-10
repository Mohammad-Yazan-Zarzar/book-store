import'./Card.css'
// import Modal from './Modal'
const Card=(props)=>{
    return <>
        <div className="card" id={props.id} >
            
            <img className="card-img-top img" src={props.image} alt='' />
            <div className="card-body">
                <h5 className="card-title title">{props.title}</h5>
                <p className="card-text text"><span className='bold'>language:</span> {props.language} </p>
                <p className='card-text text'><span className='bold'>categories:</span>  {props.categ} </p>
            </div>
          
            <div className="card-body">
                {/* <a className="card-link">Card link</a>
                <a className="card-link">Another link</a> */}
                <a href='#modal'><button className='btn colory' onClick={()=>{props.more(props.item)}} >more...</button></a>
                {/* <button className='btn btn-danger'>Zarzar</button> */}
            </div>
        </div>
        {/* ------------------- */}
     
</>
        
        
}
export default Card