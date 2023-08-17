import { PersonProps } from "./Person.types"

const Person = ({ name }: PersonProps) => {
  return (
    <div>
      <p>
        Your name {name.first} {name.last}
      </p>
    </div>
  )
}

export default Person
