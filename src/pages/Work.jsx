import React from 'react'
import "../assets/sass/Work/Work.scss"
import "../App.scss"
import Navbar from '../components/Navbar'
import { Footer } from '../components/Footer'
import WorkMain from '../components/WorkMain'

export const Work = () => {
    return (
        <div>
            <div className="bgColorLight">
                <Navbar />

                <section className="firstArea">
                    <h2 className="easyTo">EASY TO UNDERSTAND. ●IMPOSSIBLE TO IGNORE.</h2>
                    <p>The work we create lives at the intersection of clarity and surprise and positions brands in culture through shared values and ideals.
                    </p>
                </section>

                <WorkMain />

                {/* 
                <div className="secondArea">
                    <p>BASIC® is a branding and digital design agency building products, services, and ecommerce experiences that turn cultural values into company value.</p>
                    <img src="/img/svg/branding-img.svg" alt="" className="LogoBasic" />
                </div>
                <button>SEE THE WORK</button>

                <section className="thirdArea">
                    <h3>FEATURED <br /> ENGAGEMENTS</h3>
                </section> */}

            </div>
            <div className="bgColorDark">
                <Footer />
            </div>

        </div>
    )
}

/* import React from 'react';
import WorkMainData from '../../data/WorkMain.json'

import './WorkMain.scss';


const WorkMain = () => {
    return (

        <div className="workpage">
            <article className="workMain">
                {WorkMainData.map((data, elt) => <div key={elt} className="work_page">
                    <div id="workdata_box_left">
                        <p className="workdata_date">
                            {data.date}
                        </p>
                        <h4 className="workdata_title">{data.title}</h4>
                        <h5 className="workdata_info">{data.info}</h5>
                        <button id="btn_black ">
                            {data.btn}
                        </button>
                    </div>

                    <div id="workdata_box_right">

                        <figure id="left">

                            <img src={data.brandimages[0].image} alt="com" className="brand_img" />
                            <figurecaption>
                                <h5 className="brand_title">{data.brandimages[0].title}</h5>
                                <p className="brand_info">{data.brandimages[0].info}</p>
                            </figurecaption>
                        </figure>
                        <figure id="right">
                            <img src={data.brandimages[1].image} alt="com" className="brand_img" />
                            <figurecaption>
                                <h5 className="brand_title">{data.brandimages[1].title}</h5>
                                <p className="brand_info">{data.brandimages[1].info}</p>
                            </figurecaption>
                        </figure>

                    </div>

                </div>)}
            </article>


        </div>
    );
}

export default WorkMain; */
