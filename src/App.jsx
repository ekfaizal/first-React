import Aside from './components/aside';
import Body from './components/body';
import FooterDiv from './components/footer';
import Header from './components/Header';
// import footerDiv from './components/footer';
import React from 'react';
function App() {
  
  return (
    <div>
    
    <div className='d-flex flex-row'>
    <Aside/>   
    <Body/>

    </div>
    <Header/>
    <FooterDiv/>
    </div>
  );
}

export default App;
