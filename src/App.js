//import { data } from 'autoprefixer';
import React from 'react';
//import A from './component/Sakin';
//import B from './component/Sakinmaharjan';
//import Card from './component/Card';
//import{ useState } from 'react';
//import Name from './componentss/Name.js';
//import { EvenHandler} from "./componentss/EventHandler"
//import { AnotherComp } from './componentss/EventHandler'
import NavBar from './componentss/NavBar';
import HomePage from './pages/Home';
import { BrowserRouter, Routes,  Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Careers from './pages/Careers';
import ContactUs from './pages/ContactUs';
const App = () => {
  return(
    <div className='App'>
      
       <BrowserRouter>
       <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/about' element={<AboutUs/>}></Route>
          <Route path='/contact' element={<ContactUs/>}></Route>
          <Route path='/career' element={<Careers/>}></Route>
        </Routes>
       </BrowserRouter>
    </div>
  
  );
}
export default App;
 
//function App() {
 //const people = ['Ram','Shyam','Hari']
 //useState Hook
 //const value=1
//const [value]= useState(1);
 //return <div>hello</div>;
 
 //const [namee, setName]= useState('Neema');
 //const handleClick1 =(name) => setName(name)
 /*
 const handleClick1 = () => {
  if (namee == 'Neema') {
    setName('Sandipa')
  }else {
    setName('Neema')
  }
}
*/
/*
const handleClick2 = () => {
  if (namee == 'Neema') {
    setName('manita')
  }else {
    setName('Neema')
  }
}
const handleClick3 = () => {
  if (namee == 'Neema') {
    setName('lushan')
  }else {
    setName('Neema')
  }
}
 
 return(
  */
  /*
  <div className='App'>
    
    {name}
    <button className='bg-blue-600'
    onClick={handleClick}>
    click me </button>
    {name}
  
    <button onClick={handleClick}>click me</button>
    <Name Name ={name}></Name>
    */
  /*<div className='App'>
    <button onClick={handleClick1('Bijay')}>button1</button>
    <button onClick={handleClick2}>button1</button>
    <button onClick={handleClick3}>button1</button>
    <EvenHandler  name={namee}/>
    <AnotherComp />
</div>
 );

}
export default App;
*/
/*
/*
lastName:"limbu"
},
{
firstName:"neema",
    lastName:"limbu"
  }

]
console.log(Array[1].lastName)
*/
/*
const Array1 = [1,2,3,4]
const Array2 = ['a','b','c']
const Result = [...Array1,...Array2]
console.log (Result)
*/
/*
const Array = [1,2,3,4]
console.log(Array.filter(data=>data==4))
*/
/*
const Array = [1,2,3,4]
console.log(Array.map(data=>data))
const result=Array.map( data=>console.log(data))
console.log(result)


const variable = 'hehe'
*/

  /*
    
    <div className="App">
      {variable}
      <B/>
      <h2 className="text-blue-500">hello world</h2>
      <h2 className="text-red-500">hello world</h2>
      <A string='neema'>hey </A>
      <A>B</A>
      <A>C</A>
      <A>D</A>
      <A>E=</A>
    </div>
    */
   /*
   return (
<div className='flex justify-between'>
  {people.map((data) => (
  <Card name={data}></Card>
))
}
    
     {value === 1 ? 'the value is 1' : 'the value is not 1'
}
      </div>
   )
}
  
  export default App;
*/