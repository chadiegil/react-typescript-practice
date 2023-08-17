// typing an array of objects
import { Name } from "./Person.types"
type PersonListProps = {
  names: Name[]
}

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      <h1>Person List</h1>
      <p>
        {props.names.map((name) => {
          return (
            <h2 key={name.first}>
              {name.first} {name.last}
            </h2>
          )
        })}
      </p>
    </div>
  )
}

export default PersonList
