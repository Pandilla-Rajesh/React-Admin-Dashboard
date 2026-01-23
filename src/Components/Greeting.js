import React from 'react'

function Greeting({name, role, exp, user, techskills}){

    const {fname, email, age, address:{city}} = user
    const {skills, frame, ui} = techskills

    return(
        <>

            <div>
                <h3>{fname}</h3>
                <h4>{email}</h4>
                <h5>{age}</h5>
                <h6>{city}</h6>
            </div>

            <div>
                <h3>Skills: {skills}</h3>
                <h4>Framewors:{frame}</h4>
                <h5>UI Tools: {ui}</h5>
            </div>

            <div>
                <h1>Hello {name} Pandilla {role} Developer {exp}</h1>
            </div>
        </>
    )

}

export default Greeting