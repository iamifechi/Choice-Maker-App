import React from 'react'

function Header(props){
    return (
        <div style={{
                width:"50vw",height:"6em",
                textAlign:"left", display:"flex",
                flexDirection:"column",margin:"auto",
                padding:12
        }}>
            <h1 style={{marginBottom:"-1px",marginTop:"0px",display:"block"}}>Choice Maker App</h1>
            <span style={{fontStyle:"italic", marginLeft:2}}>By Ifechi</span>
        </div>
        );
}

export default Header