type InnerProps = {
  children: React.ReactNode
}

const InnerComponent = (props: InnerProps) => {
  return (
    <div>
      <h1>{props.children}</h1>
    </div>
  )
}

export default InnerComponent
