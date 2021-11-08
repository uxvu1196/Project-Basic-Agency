import React from 'react'
import OfficeMain from "./data/Office.json"
import "../assets/sass/Contact/Offices.scss"

export const Offices = () => {
    return (
        <div className="OfficeMain">

            <div className="flexIt">
                <section>
                    <h2>Offices</h2>
                </section>

                {OfficeMain.map((Office, idx) => <div key={idx} className="index">



                    <section>
                        <img src={`/img${Office.image}`} alt="Offices image" className="officeImage" />
                        <h6 className="office_number">{Office.number}</h6>

                        <section>
                            <h2>{Office.office}</h2>
                        </section>
                    </section>
                </div>
                )}
            </div>
        </div>

    )
}
