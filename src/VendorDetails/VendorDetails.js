import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const VendorDetails = () => {
    const {saleId} = useParams();
    console.log(saleId);
    const [vendor, setVendor] = useState({});
    const url = '';
    fetch(url)
    .then(res => res.json())
    .then(data => setVendor(data))
    return (
        <div className='col-9 col-md-9 col-lg-9'>
            <p className='fw-bold'>Vendor Details</p>
            <p>Vendor Id: {saleId}</p>
            <p>Shop Name: </p>
            <p>Shop Address: </p>
            <p>Phone Number: </p>
            <p>Owner Details: </p>
            <p>Email: </p>
            <p>Commission: </p>
            <p>Product Name: </p>
            <p>Product Details: </p>
            <p>Product Category: </p>
            <p>Change Approve Status: Approved/ Unapproved</p>
            <p>Image SRC: </p>
            <p>Date: </p>

        </div>
    );
};

export default VendorDetails;