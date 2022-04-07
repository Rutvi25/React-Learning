import React from 'react'
type ListProps<T> = {
  items: T[]
  onClick: (value: T) => void
}
function List<T extends {}>({ items, onClick }: ListProps<T>) {
  return (
    <div>
      { items.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}>
            {item}
          </div>
        )
      })}
    </div>
  )
}

export default List