import {FaShoppingCart} from "react-icons/fa";
import React from "react";


const StaticPricing = () => {

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Our Pricing Plans</h1>

            <div className="text-end mb-3">
                <FaShoppingCart className="fs-4" role="button" onClick={() => alert('View Cart')}/>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <div className='card border-primary' >
                        <img src='https://placehold.co/150' className="card-img-top" alt='Basic Plan' />
                        <div className="card-body">
                            <h5 className="card-title">Basic Plan</h5>
                            <p className="card-text"> Includes essential features.</p>
                            <ul className="card-text">
                                <li>Perfect for individuals starting out.</li>
                            </ul>
                            <button className="btn btn-primary w-100" onClick={()=> alert('Basic')} >
                                Choose Basic
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-4">
                    <div className='card border-success'>
                        <img src='https://placehold.co/150' className="card-img-top" alt='Pro Plan'/>
                        <div className="card-body">
                            <h5 className="card-title">Pro Plan</h5>
                            <p className="card-text">Advanced features for professionals.</p>
                            <ul className="card-text">
                                <li>Ideal for small teams or startups.</li>
                            </ul>
                            <button className="btn btn-success w-100" onClick={() => alert('Pro')}>
                                Choose Pro
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className='card border-warning'>
                        <img src='https://placehold.co/150' className="card-img-top" alt='Enterprise Plan'/>
                        <div className="card-body">
                            <h5 className="card-title">Enterprise Plan</h5>
                            <p className="card-text">Full featured solution for businesses.</p>
                            <ul className="card-text">
                                <li>Complete suite with premium support.</li>
                            </ul>
                            <button className="btn btn-warning w-100" onClick={() => alert('Enterprise')}>
                                Choose Enterprise
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default StaticPricing;