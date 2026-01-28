import Profile from "../components/Profile"
import State from "../hooks/State"
import Parent from "../components/Parent"
import Form from "../hooks/Form"
const Home = () => {
  return (
    <>
    <Profile name="Mrithip" age={20} skills={["js","python","c","c++"]}/>
      <State/>
      <Parent/>
      <Form/>
    </>
  )
}

export default Home
