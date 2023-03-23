import logo from './logo.svg';
import './App.css';
import Topbar from './components/Topbar/Topbar';
import Sidebar from './components/Sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import VendorsList from './components/VendorsList/VendorsList';
import VendorDetails from './VendorDetails/VendorDetails';
import AddVendors from './components/AddVendors/AddVendors';
import Vendors from './components/VendorsList/Vendors';
import UpdateVendorDetails from './VendorDetails/UpdateVendorDetails';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Dashboard from './components/Dashboard/Dashboard';
import Charts from './components/Charts/Charts';


function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <div className="container-fluid">
            <div className='row'>
            <Sidebar></Sidebar>
            <Routes>
            <Route path='/' element={<Dashboard></Dashboard>}></Route>
              <Route path='/sales' element={<VendorsList></VendorsList>}></Route>
              <Route path='/vendors' element={<Vendors></Vendors>}></Route>
              <Route path='/sale/:saleId' element={<VendorDetails></VendorDetails>}></Route>
              <Route path='/vendor/:vendorId' element={<UpdateVendorDetails></UpdateVendorDetails>}></Route>
              <Route path='/createavendor' element={<AddVendors></AddVendors>}></Route>
              <Route path='/login' element={<Login></Login>}></Route>
              <Route path='/signup' element={<SignUp></SignUp>}></Route>
              <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
              <Route path='/charts' element={<Charts></Charts>}></Route>
            </Routes>
            </div>
      </div>
    </div>
  );
}

export default App;
