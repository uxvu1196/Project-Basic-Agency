import React from 'react'
import "../assets/sass/Work/Work.scss"
import "../App.scss"
import Navbar from '../components/Navbar'
import { Footer } from '../components/Footer'
import WorkMain from '../components/WorkMain'

export const Work = () => {
    return (
        <div>
            <div className="bgColorLightWork">
                <Navbar />

                <section className="firstAreaWork">
                    <h2 className="easyTo">EASY TO UNDERSTAND. ●IMPOSSIBLE TO IGNORE.</h2>
                    <p>The work we create lives at the intersection of clarity and surprise and positions brands in culture through shared values and ideals.
                    </p>
                </section>

                <WorkMain />

            </div>
            <div className="bgColorDark">
                <Footer />
            </div>

        </div>
    )
}
