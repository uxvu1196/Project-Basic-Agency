import React from 'react'
import { Footer } from '../components/Footer'
import Navbar from '../components/Navbar'

export const Thinking = () => {
    return (
        <div>

            <div className="bgColorDark">
                <Navbar />
                <section className="firstArea">
                    <div>
                        <h1>THINKING</h1>
                    </div>
                    <article>
                        <h2>BRANDBEATS®</h2>
                        pBrandbeats® is our agency podcast garnering over 45,000+ listens per episode where we discuss industry happenings for 30 minutes as well as provide ten tracks of curated music. Our conversations are a candid exploration of design topics, branding trends, and experiences we’re noticing in culture.

                        <h2>APPLIED®</h2>
                        <p>Applied® is our panel series and thought-leadership platform where we share perspectives and tactics related to strategy, design, and technology. The content is raw and driven by honest observations and guided questions that use culture to explain why trends exist and how they impact business and tech.</p>
                    </article>
                </section>
                <Footer />
            </div>

        </div>
    )
}
