import React, {useState, useEffect} from "react";
import LoaderFactory from "../loader/LoaderFactory";


const Stories =()=>{
    const[stories, setStories] = useState(null);

    useEffect(() => {
        // just adding timeout to show loader for 5 seconds
        setTimeout(async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await res.json()
            setStories(data)
        }, 5000)
        
    })

    const layout = {
        type : 'multi',
        children : [{
            type : 'title',
            children : []
        },
        {
            type : 'text',
            children : [],
            count:3
        }],
        count:5
    }

    return (
        <div className="stories">
            <h2>Stories</h2>
            {stories && stories.map( story=>(
                    <div className="story" key={story.id}>
                        <h3>
                            {story.title}
                        </h3>
                        <p>{story.body}</p>
                    </div>   
            ))}

        {!stories && <LoaderFactory loaderInput={layout}></LoaderFactory>}
        
        </div>
    )
}

export default Stories;