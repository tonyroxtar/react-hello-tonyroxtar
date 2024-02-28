import React from "react";

const Card = () => {
    return (
        <>
            <div class="d-flex justify-content-center container-fluid">
                <div className="card m-1" style={{ "width": "18rem;" }}>
                    <img src='/workspaces/react-hello-tonyroxtar/src/img/DogCoding.jpg' className="card-img-top" alt="DogCode" />
                    <div className="card-body">
                        <h5 className="text-center card-title">Card title</h5>
                        <p className="text-center card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="d-flex justify-content-center btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card m-1" style={{ "width": "18rem;" }}>
                    <img src='/workspaces/react-hello-tonyroxtar/src/img/RalphWiggum_Computer.jpg' className="card-img-top" alt="RalphWiggum" />
                    <div className="card-body">
                        <h5 className="text-center card-title">Card title</h5>
                        <p className="text-center card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="d-flex justify-content-center btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card m-1" style={{ "width": "18rem;" }}>
                    <img src='/workspaces/react-hello-tonyroxtar/src/img/React_Meme.png' className="card-img-top" alt="ReacMeme" />
                    <div className="card-body">
                        <h5 className="text-center card-title">Card title</h5>
                        <p className="text-center card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="d-flex justify-content-center btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card m-1" style={{ "width": "18rem;" }}>
                    <img src='/workspaces/react-hello-tonyroxtar/src/img/StormTrooper_Office.jpg' className="card-img-top" alt="StormTrooper" />
                    <div className="card-body">
                        <h5 className="text-center card-title">Card title</h5>
                        <p className="text-center card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="d-flex justify-content-center btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;