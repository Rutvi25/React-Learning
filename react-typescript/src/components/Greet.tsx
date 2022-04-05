type GreetProps ={
  name: string
  messageCount: number 
  isLoggedIn: boolean
}
function Greet(props: GreetProps) {
  return (
    <div>
      <h2>
        {
          props.isLoggedIn 
          ? `Hello, {props.name}! You have {props.messageCount} messages` 
          : `Welcome User`
        }      
      </h2>
    </div>
  )
}

export default Greet