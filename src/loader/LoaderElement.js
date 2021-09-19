import React from "react";
import './Loader.css'

const LoaderElemet = ({props}) =>{
    const classes = `loader ${props.type}`

    let items = []
    if(!props.count){
        props.count = 1
    }
    for(var i = 0; i< props.count;i++){
        items.push(<div className={classes}></div>)
    }

    return(<div>{items}</div>)
}

export default LoaderElemet;