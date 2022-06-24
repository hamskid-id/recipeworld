import React from 'react'

export const RecipeSlide =()=>{
    return(
        <>
                <div id="carouselExampleCaptions w-50" className="carousel slide" data-bs-ride="carousel ">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://res.cloudinary.com/hamskid/image/upload/v1655990878/Recipe/lp5_fnmruk.jpg" className="d-block w-100"  alt="objcet not found" style={{height:'30rem',objectFit:'cover'}}/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://res.cloudinary.com/hamskid/image/upload/v1655990852/Recipe/19_t0hk0b.jpg" className="d-block w-100 slide2" alt="objcet not found" style={{height:'30rem',objectFit:'cover'}}/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://res.cloudinary.com/hamskid/image/upload/v1655990827/Recipe/7_wmwowu.jpg" className="d-block w-100 slide3" alt="objcet not found" style={{height:'30rem',objectFit:'cover'}}/>
                        </div>
                        
                    </div>
                    <button className="carousel-control-prev btn btn-light" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon info-div" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next btn btn-light" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon info-div" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
            </div>
        </>
    )
}