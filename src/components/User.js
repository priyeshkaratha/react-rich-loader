import React, {useState, useEffect} from "react";
import LoaderFactory from "../loader/LoaderFactory";

const User =()=>{
    const[profile, setProfile] = useState(null);

    useEffect(() => {
        // just adding timeout to show loader for 5 seconds
        setTimeout(async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/users/10")
            const data = await res.json()
            setProfile(data)
        }, 5000)
        
    })

    // define a layout for rich loader.
    const layout = {
        type : 'multi',
        children : [{
            type : 'avatar',
            children : [],
            count: 1
        },
        {
            type : 'title',
            children : [],
            count: 1
        },
        {
            type : 'text',
            children : [],
            count: 2 // no. of lines to show as loading
        }],
        count: 1
    }

    return (
        <div className="user">
            {profile && (
            <div className="profile">
                <img alt="" src="https://images.unsplash.com/photo-1544502062-f82887f03d1c" width="100px" height="100px"></img>
                {/* not able to find free api having image url.  So just hard coding */}
                <h3>
                    <p>{profile.name}</p>
                </h3>
                <p>Email : {profile.email}</p>
                <p> Website : <a href={profile.website}>{profile.website}</a></p>
            </div>
        )}

        {!profile && <LoaderFactory loaderInput={layout}></LoaderFactory>}
        
        </div>    
    )
}

export default User;