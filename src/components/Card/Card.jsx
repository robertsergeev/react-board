import React, { useRef, useState } from "react";

const Card = ({ startX, startY }) => {
    const [startPos, setStartPos] = useState({ x: startX, y: startY });
    const [startMousePos, setStartMousePos] = useState({ x: 0, y: 0 });
    const [isMouseDown, setIsMouseDown] = useState(false);
    const cardRef = useRef(null);

    const handleMouseDown = (event) => {
        setStartPos({
            x: cardRef.current.offsetLeft,
            y: cardRef.current.offsetTop,
        });

        setStartMousePos({ x: event.clientX, y: event.clientY });

        setIsMouseDown(true);
    };

    const handleMouseMove = (event) => {
        if (isMouseDown) {
            const card = cardRef.current;

            const deltaX = event.clientX - startMousePos.x;
            const deltaY = event.clientY - startMousePos.y;

            card.style.left = startPos.x + deltaX + "px";
            card.style.top = startPos.y + deltaY + "px";
        }
    };

    const handleMouseUp = () => {
        setIsMouseDown(false);
    };

    return (
        <div
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            ref={cardRef}
            className="card"
            style={{
                top: startPos.y,
                left: startPos.x,
                cursor: isMouseDown ? "grabbing" : "grab",
            }}
        ></div>
    );
};

export default Card;
