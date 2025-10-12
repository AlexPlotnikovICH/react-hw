import { v4 as uuidv4 } from 'uuid';

// Смотри сюда 👇. Мы добавили = []
function ShoppingList({ items = [] }) {
    // Теперь, если items не передали, он будет [], а не undefined.
    // И проверка items.length === 0 сработает без ошибок!
    if (items.length === 0) {
        return <p>Список покупок пуст</p>;
    }

    return (
        <div>
            <h3>Список покупок:</h3>
            <ul>
                {items.map((item) => (
                    <li key={uuidv4()}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default ShoppingList;