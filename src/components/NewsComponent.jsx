import React from 'react'
import News from "./data/News.json"
import "../assets/sass/News/News.scss"

export default function NewsComponent() {
    return (
        <div className="News">

            {News.map((News, idx) => <div key={idx} className="index">

                <article className="news_container">
                    <img src={`/img${News.image}`} alt="News image" className="News_image" />
                    <div>
                        <h5 className="news_title">{News.title}</h5>
                        <p className="News_description">{News.text}
                            <span className="sr">{News.date}</span></p>
                    </div>
                    <img src={`/img/svg${News.arrow}`} alt="Arrows of companies" className="arrows" />
                </article>
            </div>
            )}
        </div>
    );
}
