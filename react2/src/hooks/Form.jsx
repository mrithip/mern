import {useState} from 'react'
const Form = () => {
    const [form,setForm] = useState({
        name: "",
        email: "",
        age: "",
        department: ""
    })
    const handleChanges=(e)=> {
        const {name,value}=e.target
        setForm((prev)=>({
            ...prev,
            [name]:value
        }))
    }
    const handleSubmit=(e)=> {
        e.preventDefault()
            console.log(form)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name:</label>
            <input type='text' name="name" value={form.name}
            onChange={handleChanges}/> <br  />
            <label htmlFor='email'>Email:</label>
            <input type='text' name="email" value={form.email}
            onChange={handleChanges}/> <br  />
            <label htmlFor='age'>Age:</label>
            <input type='text' name="age" value={form.age}
            onChange={handleChanges}/> <br  />
            <label htmlFor='department'>Departmet:</label>
            <input type='text' name="department" value={form.department}
            onChange={handleChanges}/> <br  />
            <button type='submit'>Submit</button>
        </form>
    
    </div>
  )
}

export default Form
