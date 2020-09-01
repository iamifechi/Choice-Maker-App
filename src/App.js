import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Navbar from './components/Navbar'
import Main from './components/Main'

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
     style:{ 
        color:"whitesmoke", 
        background:"#000",
        height:"100vh",
        margin:0,
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        textAlign:"center",
        alignItems:"flex-start"},
      isStarted:false
    };

    this.handleStart = this.handleStart.bind(this);
  }

  handleStart(){
      this.setState({
        isStarted:true
      })
  }

  render(){ 
      const style = this.state.style;
      const isStarted = this.state.isStarted;
      let header;
      let button;
      let main;
      if(isStarted){
        header = <Navbar />;
        button=<button style={{display:"none"}}/>;
        main = <Main />;
      }
      else{
        header = <Header />;
        button = <button 
                    style={{
                      cursor:"pointer",
                      paddingLeft:20,paddingRight:20,paddingTop:10,
                      paddingBottom:10,margin:"auto",color:"inherit",
                      backgroundColor:"transparent",border:"2px solid white",
                      borderRadius:5
                    }}
                      onClick={this.handleStart}
                  >Start App</button>
      }
     
    return(
      <div style={style}>
        {header}
        {button}
        {main}
        
        

      </div>
    )
  }
}





export default App;
