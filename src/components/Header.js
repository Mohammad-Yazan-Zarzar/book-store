import './Header.css'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { FaBeer } from 'react-icons/fa';
import {FcSearch} from 'react-icons/fc'
const Header=(props)=>{
    return <div className='header' >
        <div className=''>
            <div className='row'>
                <div className='col-8 col-sm-6 welcome' >
                    A book is a dream that you hold in your hand
                </div>
                <div className='col-8 col-sm-4 rowInput'>
                    <input type='text' placeholder='Search...' onChange={(e)=>{props.setInput(e.target.value)}} value={props.input} onKeyUp={props.search} ></input>
                    <FcSearch className='icon cursor' onClick={props.search2}/>
                    </div>

            </div>


        </div>
    </div>
}
export default Header