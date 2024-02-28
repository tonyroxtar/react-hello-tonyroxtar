import React from "react";

const Card = () => {
    return (
        <>
            <div className="d-flex justify-content-center container-fluid p-1">
                <div className="card m-1 w-100" style={{ "width": "18rem;" }}>
                    <img src='https://i.pinimg.com/736x/51/0d/a9/510da98abbe03f7ff9a7ce6eb0f362e7.jpg' className="card-img-top h-100" alt="DogCode" />
                    <div className="card-body">
                        <h5 className="text-center card-title">Newbie Coding</h5>
                        <p className="text-center card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                        <a href="#" className="d-flex justify-content-center btn btn-primary">Find out more</a>

                    </div>
                </div>
                <div className="card m-1 w-100" style={{ "width": "18rem;" }}>
                    <img src='https://i.imgflip.com/32p9tl.jpg' className="card-img-top h-100" alt="RalphWiggum" />
                    <div className="card-body">
                        <h5 className="text-center card-title">Always Learning</h5>
                        <p className="text-center card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="d-flex justify-content-center btn btn-primary">Find out more</a>
                    </div>
                </div>
                <div className="card m-1 w-100" style={{ "width": "18rem;" }}>
                    <img src='https://miro.medium.com/v2/resize:fit:820/0*oyD7ekV-hMU91h4J.png' className="card-img-top h-100" alt="CodeMeme" />
                    <div className="card-body">
                        <h5 className="text-center card-title">Apply Knowledge</h5>
                        <p className="text-center card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="d-flex justify-content-center btn btn-primary">Find out more</a>
                    </div>
                </div>
                <div className="card m-1 w-100" style={{ "width": "18rem;" }}>
                    <img src='https://i.pinimg.com/736x/fd/9d/1f/fd9d1f89b0f30a85d39f2f7841675ff2.jpg' className="card-img-top h-100" alt="StormTrooper" />
                    <div className="card-body">
                        <h5 className="text-center card-title">Working Hard</h5>
                        <p className="text-center card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="d-flex justify-content-center btn btn-primary">Find out more</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;