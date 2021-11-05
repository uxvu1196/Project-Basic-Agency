import React from 'react';
import WorkData from "./data/Work.json"
import "../assets/sass/Work/WorkData.scss"


const WorkMain = () => {
    return (
        <div className="WorkMainArea">
            <article className="WorkMain">
                {WorkData.map((work, idx) => <div key={idx} className="WorkBox">
                    <div id="BoxLeft">
                        <p className="WorkDate">
                            {work.date}
                        </p>
                        <h4 className="WorkTitle">{work.title}</h4>
                        <h5 className="WorkInfo">{work.info}</h5>
                        <button id="LearnMore">
                            {work.btn}
                        </button>
                    </div>
                    {/*UND-BEDINGUNG: && wenn das Image bei JSON existiert dann nimm den Image-Tag */}
                    <div id="BoxRight">

                        {/* ================= LEFT IMG7VIDEO AREA =================== */}

                        <figure>
                            {work.brandimages[0].image &&
                                <img src={work.brandimages[0].image} alt="Pictures of Brand and Companies" className="BrandImg" />
                            }
                            {/* && wenn das Video bei JSON existiert dann nimm den Video-Tag- && kann man in allen Sprachen anwenden! if und else nur in JS*/}
                            {work.brandimages[0].video &&
                                <video src={work.brandimages[0].video} alt="Pictures of Brand and Companies" className="BrandImg" controls autoPlay="autoplay" />
                            }
                            <figurecaption>
                                <h5 className="BrandTitle">{work.brandimages[0].title}</h5>
                                <p className="BrandInfo">{work.brandimages[0].info}</p>
                            </figurecaption>
                        </figure>

                        {/* ================= RIGHT IMG AREA =================== */}
                        <figure >
                            <img src={work.brandimages[1].image} alt="Pictures of Brand and Companies" className="BrandImg" />
                            <figurecaption>
                                <h5 className="BrandTitle">{work.brandimages[1].title}</h5>
                                <p className="BrandInfo">{work.brandimages[1].info}</p>
                            </figurecaption>
                        </figure>

                    </div>

                </div>)}
            </article>


        </div>
    );
}

export default WorkMain;