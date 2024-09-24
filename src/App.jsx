import { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";

function App() {
    const [cards, setCards] = useState([]);

    const createCard = () => {
        const newCard = { id: Date.now(), startX: 10, startY: 10 };

        setCards([...cards, newCard]);
    };

    return (
        <div className="App">
            <div className="container">
                {cards.map((card) => (
                    <Card
                        key={card.id}
                        startX={card.startX}
                        startY={card.startY}
                    />
                ))}
            </div>

            <button onClick={createCard} className="create_btn">
                +
            </button>
        </div>
    );
}

export default App;
