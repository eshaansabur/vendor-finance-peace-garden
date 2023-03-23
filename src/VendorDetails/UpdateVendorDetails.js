import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateVendorDetails = () => {
    const {vendorId} = useParams();
    console.log(vendorId);
    const [vendor, setVendor] = useState({});
    const url = '';
    fetch(url)
    .then(res => res.json())
    .then(data => setVendor(data))
    return (
        <div className='col-9 col-md-9 col-lg-9 mt-5'>
            <p className='fw-bold'>Vendor Details</p>
            <p>Vendor Id: {vendorId}</p>
            <p>Shop Name: </p>
            <p>Shop Address: </p>
            <p>Phone Number: </p>
            <p>Owner Details: </p>
            <p>Email: </p>
            <p>Commission percentage: </p>
            <p>Change Approve Status: Approved/ Unapproved</p>
            <button className='btn btn-primary px-3 m-2'>Update Vendor Status</button>
            <button className='btn btn-danger px-3 m-2'>Delete Vendor</button>

        </div>
    );
};

export default UpdateVendorDetails;