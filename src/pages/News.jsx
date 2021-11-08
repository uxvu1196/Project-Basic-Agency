import React from 'react'
import { Footer } from '../components/Footer'
import Navbar from '../components/Navbar'

export const News = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            {/* 
            <div>
                <section className="HeaderNews">
                    <div className="mainnews_flex">
                        <h1 className="test"> NEWS</h1>
                        <h1 className="blackCircle">●</h1>
                    </div>


                    {MainnewsData.map((mainnews, elt) => <div key={elt} className="BasicNews">
                        <article className="news_container">

                            <img src={mainnews.image} alt="com" className="mainNews_img" />

                            <div className="news_info">
                                <h3 className="mNews_title">{mainnews.title}</h3>

                                <p className="mNews_description">
                                    {mainnews.date}</p>
                            </div>
                            <img src={mainnews.arrow} alt="arrow" className="mNews_arrow" />
                        </article>
                    </div>
                    )}
                </section>
                );
            </div> */}

            <div className="bgColorDark">
                <Footer />
            </div>

        </div>
    )
}
