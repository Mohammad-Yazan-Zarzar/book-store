import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Loader from './components/Loader';
import Footer from './components/Footer';
// import Modal from './components/Modal';
function App() {
  const arr=[]
  const [input,setInput]=useState('');
  const [arrCard,setArrCard]=useState(arr)
  const [loaderOn,setLoader]=useState('')
  const [mesage,setMesage]=useState('');

  const search=(ev)=>{
    // console.log('hi',ev.key)
    if(ev.key==='Enter'){
     let APIKey='AIzaSyCKX2rpbsj4XZU20FLOC9shxSmpLBZdf2w'
      console.log(input)
      setLoader('on')
      setMesage('')
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${input}&download=epub&key=${APIKey}`)
      .then((res)=>{
        console.log(res.data.items)
        setArrCard(res.data.items)
      })
      .catch(err=>{
        console.log(err)
        setMesage(err.message)
      })
      .finally(()=>{
         setLoader('')
      })
    }
  }
  const search2=()=>{
    if(input!==''){
      let APIKey='AIzaSyCKX2rpbsj4XZU20FLOC9shxSmpLBZdf2w'
       console.log(input)
       setLoader('on')
       axios.get(`https://www.googleapis.com/books/v1/volumes?q=${input}&download=epub&key=${APIKey}`)
       .then((res)=>{
         console.log(res.data.items)
         setArrCard(res.data.items)

       })
       .catch(err=>console.log(err))
       .finally(()=>{
          setLoader('')
       })
     }

  }  
  useEffect(() => {
    //Runs only on the first render
    let APIKey='AIzaSyCKX2rpbsj4XZU20FLOC9shxSmpLBZdf2w'
    console.log('effect')
    setLoader('on')
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:computers&orderBy=newest&key=${APIKey}`)
    .then((res)=>{
      console.log(res.data.items)
      setArrCard(res.data.items)
    })
    .catch(err=>{
      setMesage( err.message)
      console.log(err)
    })
    .finally(()=>{
       setLoader('')
    })

  }, []);
  return (
    <div className="App">
      
      <Header input={input} setInput={setInput} search={search} search2={search2} ></Header>
      <Loader loaderOn={loaderOn}></Loader>
      <p className='pColor'>{mesage}</p>
      <Main arrCard={arrCard} loaderOn={loaderOn} ></Main>
      {/* <Modal></Modal> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
