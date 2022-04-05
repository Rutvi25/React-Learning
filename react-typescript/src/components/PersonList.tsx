type PersonListProps = {
  names: {
    first: string
    last: string
  }[]
}

function PersonList(props: PersonListProps) {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h3 key={name.first}>{name.first} {name.last}</h3>
        )
      })}
    </div>
  )
}

export default PersonList