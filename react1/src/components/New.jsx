import React from 'react'

const New = ({name,dept,skills}) => {
  return (
    <>
    <h1>hi i am {name} from {dept} department</h1>
    <ol>
      {skills.map((skill)=>(
        <li>{skill}</li>
      ))}
    </ol>
    </>
  )
}

export default New
