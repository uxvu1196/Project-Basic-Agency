import React from 'react'
import CompaniesData from "./data/Companies.json"

export const Features = () => {
    return (
        <section className="companies">
            {CompaniesData.map((Companies, idx) => <div key={idx} className="index">
                <img src={`/img/svg${Companies.image}`} alt="com" className="companies_img" />
                <h5 clssName="com_title">{Companies.title}</h5>
                <p className="line"></p>
                <p className="com_description">{Companies.info}</p>
            </div>
            )}
        </section>
    );
}
