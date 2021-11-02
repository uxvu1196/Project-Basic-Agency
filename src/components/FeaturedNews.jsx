import React from 'react'
import HomeNews from "./data/News.json"
import "../assets/sass/News/News.scss"

export const FeaturedNews = () => {
    return (
        <div className="News">

            {HomeNews.map((News, idx) => <div key={idx} className="index">
                <article className="news_container">
                    <img src={`/img${News.image}`} alt="News image" className="News_image" />

                    <div>
                        <h5 clssName="news_title">{News.title}</h5>
                        <p className="News_description">{News.info}
                            <span>{News.date}</span></p>
                    </div>

                    <img src={`/img/svg${News.arrow}`} alt="Arrows of companies" className="arrows" />
                </article>
            </div>
            )}
        </div>
    );
}

