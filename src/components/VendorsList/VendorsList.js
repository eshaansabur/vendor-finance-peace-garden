import { Image } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import Vendor from '../Vendor/Vendor';

const VendorsList = () => {
    const [vendors, setVendors] = useState([]);
    useEffect(()=>{
        fetch('vendors.json')
        .then(res => res.json())
        .then(data => setVendors(data))
    }, []);
    const handleDeleteVendor = (vendor) => {
        const remaining = vendors.filter(od => od._id !== vendor._id)
        console.log(remaining)
        setVendors(remaining);
    }
    return (
        <div className='col-9 col-md-9 col-lg-9 mt-5 text-start ms-4'>
          <h3 className='mt-4 mb-3'>Sales (Today)</h3>
            <table class="table table-success table-striped table-hover table-bordered border-light">
  <thead>
    <tr>
    <th scope="col-1">Shop Logo</th>
      <th scope="col-1">Shop Name</th>
      <th scope="col-1">Owner</th>
      <th scope="col-1">Email</th>
      <th scope="col-1">Phone</th>
      <th scope="col-1">Address</th>
      <th scope="col-1">Earning</th>
      <th scope="col-1">Approve Status</th>
      <th scope="col-1">Sale Commission</th>
      <th scope="col-1">Date</th>
      <th scope="col-1">Edit/</th>
      <th scope="col-1">Delete</th>
    </tr>
  </thead>
  <tbody>
    {
        vendors.map(vendor => <Vendor key={vendor._id} vendor={vendor} handleDeleteVendor={handleDeleteVendor}></Vendor>)
    }
  </tbody>
</table>
        </div>
    );
};

export default VendorsList;