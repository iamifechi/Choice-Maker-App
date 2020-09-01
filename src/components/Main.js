import React from 'react'
import Header from './Header'

class Main extends React.Component{
    constructor(props){
        super(props);

        this.state={
            input:"",
            questions:[]
        };

        
    }

    render(){
        let styles = {
            position:"relative", 
            width:"100vw",
            height:"100vh",
            display:"block",
            margin:0,marginTop:"6em",
            borderTop:"1px solid white"
        };

        let input = <input type="text" 
                    style={{margin:20,padding:10,width:200}}
                    value={this.state.input}
                    />
        return(
            <div style={styles}>
                <h2>Hey there, Let me help you make a choice</h2>
                <ol style={{textAlign:"left",width:"90%",margin:"auto"}}>
                    <label>Steps:</label>
                    <li>Type in your questions</li>
                    <li>Enter all available options</li>
                    <li>Click 'Ask' and let me make a choice for you</li>
                </ol>

                <div>
                    {input}
                </div>
                
              
                
            </div>
        )
    }
}

export default Main