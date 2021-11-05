import React from 'react'
import CompaniesData from "./data/Companies.json"
import "../assets/sass/FeatureEngagement/companies.scss"

export const Features = () => {
    return (
        <section className="companies">
            {CompaniesData.map((Companies, idx) => <div key={idx} className="index">
                <img src={`/img/svg${Companies.image}`} alt="News about the Companies" />
                <h5>{Companies.title}</h5>
                <p className="line"></p>
                <p className="com_description">{Companies.info}</p>
            </div>
            )}
        </section>
    );
}
