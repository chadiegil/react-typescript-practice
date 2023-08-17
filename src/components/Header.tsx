type GreetProps = {
  name: string
  messageCount?: number
  isLoggedIn: boolean
}

const Header = (props: GreetProps) => {
  const { messageCount = 0 } = props
  return (
    <div>
      <h1>Hello {props.name} your a software engineer now! Congratulation</h1>

      {props.isLoggedIn ? (
        <p>Hope you last long more than {messageCount} yrs</p>
      ) : (
        "You need to login to access the page."
      )}
    </div>
  )
}

export default Header
