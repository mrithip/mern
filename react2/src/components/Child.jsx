const Child = ({send}) => {
    const data="This data is from Child";
  return (
    <div>
      <button onClick={()=> send(data)}>Send Data</button>
    </div>
  )
}
export default Child
