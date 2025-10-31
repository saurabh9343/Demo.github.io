import React from 'react'
import { Link } from 'react-router-dom'

const Bank = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 ">
                        <h2 className='mt-3'> Bank Questions Series</h2>
                        <p>Banks play a vital role in supporting government economic policies and managing public funds.
                            They help implement government schemes, provide loans, and maintain financial stability.</p>
                        <div className="row box border rounded p-2 shadow-sm m-3 align-items-center">
                            <Link className="text-decoration-none text-dark d-flex align-items-center">

                                {/* Image in front of box */}
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"  // ✅ Example icon
                                    alt="English"
                                    width="45"
                                    height="45"
                                    className="me-3"
                                />

                                {/* Text content */}
                                <div>
                                    <div className="header">
                                        <h5 className="mb-1">English</h5>
                                    </div>
                                    <div className="body">
                                        <p className="mb-0">0/100 Modules</p>
                                    </div>
                                </div>

                            </Link>
                        </div>

                    </div>

                    {/* <div className="col-md-6 ">
                        <h2 className='mt-3'> Bank Questions Series</h2>
                        <p>Banks play a vital role in supporting government economic policies and managing public funds.
                            They help implement government schemes, provide loans, and maintain financial stability.</p>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Bank