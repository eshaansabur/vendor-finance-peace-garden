import {useState, useEffect} from 'react';
import AllVendor from '../Vendor/AllVendor';

const Vendors = () => {
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
            <h3 className='mt-4 mb-3'>All Vendors</h3>
            <table class="table table-success table-striped table-hover table-bordered border-light">
  <thead>
    <tr>
    <th scope="col-1">Shop Logo</th>
      <th scope="col-1">Shop Name</th>
      <th scope="col-1">Owner</th>
      <th scope="col-1">Email</th>
      <th scope="col-2">Phone</th>
      <th scope="col-2">Address</th>
      <th scope="col-1">Approve Status</th>
      <th scope="col-2">Update Details</th>
      <th scope="col-1">Delete</th>
    </tr>
  </thead>
  <tbody>
    {
        vendors.map(vendor => <AllVendor key={vendor._id} vendor={vendor} handleDeleteVendor={handleDeleteVendor}></AllVendor>)
    }
  </tbody>
  </table>
</div>
    );
};

export default Vendors;