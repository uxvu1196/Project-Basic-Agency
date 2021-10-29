import React from 'react'
import HomeNews from "./data/News.json"

export const FeaturedNews = () => {
    return (
        <section className="News" >
            {HomeNews.map((News, idx) => <div key={idx} className="index">
                <img src={`/img${News.image}`} alt="News image" className="arrows" />
                <h5 clssName="news_title">{News.title}</h5>
                <p className="news_info">{News.info}</p>
                <p className="news_date">{News.date}</p>
                <img src={`/img/svg${News.arrow}`} alt="Arrows of companies" className="arrows" />
            </div>
            )}
        </section >
    );
}
