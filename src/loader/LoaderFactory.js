
import React from "react";
import Gradient from "./Gradient";
import './Loader.css'

import LoaderElemet from "./LoaderElement";

const LoaderFactory = ({loaderInput}) =>{
   
    const create = (input) =>{
        if(input.type === "multi"){   // if multi checking recursively inside each child and createsl loader layout 
            let items = []
        for(var i = 0; i< input.count;i++){
            items.push(<div>
                
                {input.children.map(a=>{
                    return (create(a))
                })}
                <div className="gap"></div>
             </div>)
        }

    return(<div>{items}</div>)  // if its primitive based on different type returning JSX with different class
        }  
        else{
            let props = {
                type : input.type,
                count: input.count
            }
            return (<LoaderElemet props={props}></LoaderElemet>)
        }
    }

    return(<div className="loader-wrapper">
       { create(loaderInput)}
        <Gradient/>
    </div>);
}

export default LoaderFactory;