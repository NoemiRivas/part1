
const Hello = (props) => {  //// definicion de componente
return(
  <div>
    <p>Hello{props.name}, you are {props.age} years old </p>
  </div>
)
}

const App = () => { ///// llamada al componente
  const name =  "Cristian"
  const age = 10

  
  return(
    <div>
      <h1>Greeting</h1>
      <Hello name=" Noemi" age= {28} />    
      <Hello name= {name}  age= {age + 26} />  
    </div>
  )
}

export default App