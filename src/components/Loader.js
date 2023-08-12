import'./Main.css'
// const Loader=(props)=>{
//    
//         console.log('on')
//         return <div className="text-center">
//             <h1>Loader</h1>
//         <div className="spinner-border" role="status">
//           <h1 className="sr-only">Loading...</h1>
//         </div>
//         <div className="spinner-grow text-success" >
//             <span class="sr-only">Loading...</span>
//         </div>
//       </div>
//     }
   
// }
// export default Loader
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loader(props) {
    if(props.loaderOn==='on'){
    return (
    <Box className='center heightLoader' sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
    }
}