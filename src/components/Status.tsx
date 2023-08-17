type StatusProps = {
  status: "loading" | "success" | "error"
}
const Status = (props: StatusProps) => {
  let message
  //   if (props.status === "loading") {
  //     message = "Loading"
  //   } else if (props.status === "success") {
  //     message = "Data fetch successfully"
  //   } else if (props.status === "error") {
  //     message = "Error Fetching the data!"
  //   }

  switch (props.status) {
    case "loading":
      message = "Loading.."
      break
    case "success":
      message = "Data fetch successfully"
      break
    case "error":
      message = "Error fetching the data"
      break
    default:
      message = "No status"
  }

  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  )
}

export default Status
