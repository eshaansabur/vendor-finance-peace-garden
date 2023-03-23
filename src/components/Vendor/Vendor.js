import React from 'react';
import { useNavigate } from 'react-router-dom';

const Vendor = (props) => {
    const {_id, img, logo, commission, name, owner, email, phone, address, earning, status, category, date} = props.vendor;
    const {handleDeleteVendor} = props;
    const navigate = useNavigate();
    const seeVendorDetails = (id) =>{
        navigate(`/sale/${id}`)
    }
    return (
        <tr>
            <td><img className='img-size' src={logo}/></td>
            <td>{name}</td>
            <td>{owner}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{address}</td>
            <td>{earning}</td>
            <td>{status}</td>
            <td>{earning * 0.1}</td>
            <td>{date}</td>
            <td><button onClick={()=>seeVendorDetails(_id)} className='btn report-button'><small>Details</small></button></td>
            <td><button onClick={()=>handleDeleteVendor(props.vendor)} className='btn btn-danger'><small>Delete</small></button></td>
        </tr>
    );
};

export default Vendor;