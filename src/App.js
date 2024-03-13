import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import {action, comedy,horror,documentaries, originals} from './urls'
import './App.css'
import RowPost from './Components/RowPost/RowPost';
import Banner from './Components/Banner/Banner';


function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <RowPost url = {originals} title='Netflix Originals'/>
      <RowPost url = {action} title='Action' isSmall/>
      <RowPost url = {comedy} title='Comedy' isSmall/>
      <RowPost url = {horror} title='Horror' isSmall/>
      <RowPost url = {documentaries} title='Documentaries' isSmall/>


    </div>
  );
}

export default App;

