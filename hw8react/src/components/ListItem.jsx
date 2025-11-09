import { useState, useEffect } from 'react'

function ListItems() {
  const [items, setItems] = useState([])
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    console.log("Компонент ListItems обновлен (массив 'items' изменился)")
  }, []) // <-- "Следим" за 'items'

  const addItem = () => {
    if (inputValue.trim() === '') {
      return
    }
    setItems([...items, inputValue])
    setInputValue('')
  }

  const handleInputChange = e => {
    setInputValue(e.target.value)
  }

  return (
    <div>
      <input type='text' value={inputValue} onChange={handleInputChange} />
      <button onClick={addItem}>Добавить</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default ListItems
