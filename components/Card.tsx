"use client"
import { useState } from "react";
import "../styles/components/cards.css"

export default function Card() {
    const [cards] = useState([
        {
            image: "https://i.pinimg.com/736x/6b/c9/84/6bc9843e59c7accf110bbb9e174d7648.jpg",
            title: "Какой-то заголовок",
            description: "Тут какое-то описание"
        },

        {
            image: "https://i.pinimg.com/1200x/e2/74/d7/e274d78176dad801c50d008fcf775e6b.jpg",
            title: "Какой-то заголовок",
            description: "Тут какое-то описание"
        },

        {
            image: "https://i.pinimg.com/736x/f3/c3/e8/f3c3e860abb77b07587a426bba159c80.jpg ",
            title: "Какой-то заголовок",
            description: "Тут какое-то описание"
        },
             {
            image: "https://i.pinimg.com/736x/6b/c9/84/6bc9843e59c7accf110bbb9e174d7648.jpg",
            title: "Какой-то заголовок",
            description: "Тут какое-то описание"
        },

        {
            image: "https://i.pinimg.com/1200x/e2/74/d7/e274d78176dad801c50d008fcf775e6b.jpg",
            title: "Какой-то заголовок",
            description: "Тут какое-то описание"
        },

        {
            image: "https://i.pinimg.com/736x/f3/c3/e8/f3c3e860abb77b07587a426bba159c80.jpg ",
            title: "Какой-то заголовок",
            description: "Тут какое-то описание"
        }
    ]);

    return (
        <section>
            <div className="card-container">
                {cards.map((card, i) => (
                    <div key={i} className="card">
                        {card.image ? <img src={card.image} alt={card.title} /> : null}
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}