import React from 'react';
import '../assets/scss/dashboard.scss';
import pickup from '../assets/images/icons/pickup.png';
import donate from '../assets/images/icons/donate.png';
import Header from '../components/header'



const Dashboard = (props) => {
    return (
        <>
        <div className="bg-image">
            <Header />
            <div className="container">
                <div className="row ml-5 mt-5">
                    <div className="pickup col">
                        <div className="btn btn-dark bigBtn pickupBtn m-4 mt-5">
                            <h5 className="p-3 text-center">Pickup</h5>
                            <span className="tooltip">Find local donations available for pickup</span>
                            <img id="pickupImg" className="m-3 mx-auto image-fluid" alt="Pickup" src={pickup}/>
                        </div>
                    </div>
                    <div className="donate col">
                        <div className="btn btn-dark bigBtn m-4 mt-5">
                            <h5 className="p-3 text-center">Donate</h5>
                            <img id="donateImg" className="mt-n3 m-3 mx-auto image-fluid" alt="Pickup" src={donate}/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )

}

export default Dashboard;