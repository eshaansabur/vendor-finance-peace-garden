import React from 'react';
import { useNavigate } from 'react-router-dom';

const AllVendor = (props) => {
    const {_id, img, logo, commission, name, owner, email, phone, address, earning, status, category, date} = props.vendor;
    const {handleDeleteVendor} = props;
    const navigate = useNavigate();
    const seeVendorDetails = (id) =>{
        navigate(`/vendor/${id}`)
    }
    return (
        <tr>
            <td><img className='img-size' src={logo} alt=""/></td>
            <td>{name}</td>
            <td>{owner}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{address}</td>
            <td>{status? <span className='badge rounded-pill bg-success px-4 py-2'>active</span> : <span className='badge rounded-pill bg-danger px-4 py-2'>inactive</span>}</td>
            <td><button onClick={()=>seeVendorDetails(_id)} className='btn report-button'><small>Update</small></button></td>
            <td><button onClick={()=>handleDeleteVendor(props.vendor)} className='btn btn-danger'><small>Delete</small></button></td>
        </tr>
    );
};

export default AllVendor;