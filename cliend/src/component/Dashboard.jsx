import React from 'react'
import Navbar from './Navbar'
import DashHeading from './DashHeading'

const Dashboard = () => {
    return (
        <>
            <div className="main-dashboard">
                <Navbar />
                <div className="container container-fluid p-0">
                    <DashHeading heading="Dashboard" />
                    <div className="main-prod">
                        <div className="prodcontainer">
                            <div className="order-info">
                                <h2 className="">Product Order</h2>
                                <hr />
                                <div className="order-desc">
                                    <p><span>Procuct</span><span>:</span> <span>1</span></p>
                                    <p><span>Processed</span><span>:</span> <span>1</span></p>
                                    <p><span>Total Order</span><span>:</span> <span>1</span></p>
                                </div>
                            </div>
                            <div className="prod-info">
                                <div className="d-flex">
                                    <div className="order-desc">
                                        <h2 className="">Product Information</h2>
                                        <hr />
                                        <p><span>Procuct</span><span>:</span> <span>1</span></p>
                                        <p><span>Processed</span><span>:</span> <span>1</span></p>
                                        <p><span>Total Order</span><span>:</span> <span>1</span></p>
                                    </div>
                                    <div className="order-desc">
                                        <h2 className="">Catagory Information</h2>
                                        <hr />
                                        <p><span>Published</span><span>:</span> <span>1</span></p>
                                        <p><span>Draft</span><span>:</span> <span>1</span></p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='infocontainer'>
                            <div className="news-info">
                                <div className="d-flex">
                                    <div className="order-desc">
                                        <h2 className="">News Info</h2>
                                        <hr />
                                        <p><span>Procuct</span><span>:</span> <span>1</span></p>
                                        <p><span>Processed</span><span>:</span> <span>1</span></p>
                                        <p><span>Total Order</span><span>:</span> <span>1</span></p>

                                    </div>
                                    <div className="order-desc">
                                        <h2 className="">App Version</h2>
                                        <hr />
                                        <p><span>Procuct</span><span>:</span> <span>1</span></p>
                                        <p><span>Processed</span><span>:</span> <span>1</span></p>
                                        <p><span>Total Order</span><span>:</span> <span>1</span></p>
                                    </div>
                                </div>

                            </div>
                            <div className="apps-info">
                                <div className="d-flex">
                                    <div className="order-desc">
                                        <h2 className="">Application Setting</h2>

                                        <hr />
                                        <p><span>Procuct</span><span>:</span> <span>1</span></p>
                                        <p><span>Processed</span><span>:</span> <span>1</span></p>
                                        <p><span>Total Order</span><span>:</span> <span>1</span></p>
                                    </div>
                                    <div className="order-desc">
                                        <h2 className="">Notifaication</h2>

                                        <hr />
                                        <p><span>Procuct</span><span>:</span> <span>1</span></p>
                                        <p><span>Processed</span><span>:</span> <span>1</span></p>
                                        <p><span>Total Order</span><span>:</span> <span>1</span></p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
