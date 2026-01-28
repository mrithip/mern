const Profile = ({name,age,skills}) => {
  return (
    <>
        <h1>Iam {name} {age} years old</h1>
        <ul>
        {skills.map((skill) => {
            return <li key={skill}>{skill}</li>;
        })}
        </ul>
    </>
  )
}
export default Profile
