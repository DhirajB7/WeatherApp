import React from 'react'

const sessionConfig = {
    summer:{
        text:"LETS HIT BEACH",
        sym:"massive sun"
    },
    winter:{
        text:"SO COLD IT IS",
        sym:"massive snowflake"
    }
}

function getSession(lat,month){
    if(month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter'
    }else{
        return lat > 0 ? 'winter' : 'summer'
    }
}


function SessionDisplay(props) {

    const session = getSession(props.lat,new Date().getMonth())
    const {text , sym } = sessionConfig[session]

    return (
        <div className = {"SessionDisplay "+session}>
        <i className={sym+" icon "+"icon-left"}/>
         <h1>{text}</h1>
         <i className={sym+" icon "+"icon-right"}/>
        </div>
    )
}

export default SessionDisplay
