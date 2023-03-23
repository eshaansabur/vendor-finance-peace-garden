import React from 'react';
import BarChartIcon from '@mui/icons-material/BarChart';
import WidgetsIcon from '@mui/icons-material/Widgets';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ListAltIcon from '@mui/icons-material/ListAlt';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './Sidebar.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ProductionQuantityLimits from '@mui/icons-material/ProductionQuantityLimits';
import { Link } from 'react-router-dom';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Sidebar = () => {
    return (
            <div className="col-2 col-md-2 col-lg-2 sidebar">
                <div className="sidebarmenu">
                    <div className="sidebarlist">
                    <ul className='itemslisting'>
                    <li className='item'>
                    <Link to='/dashboard'><DashboardIcon></DashboardIcon> Dashboard</Link>
                    </li>
                    <li className='item'>
                    <Link to='/charts'><BarChartIcon></BarChartIcon> Charts</Link>
                    </li>
                    <li className='item'>
                    <Link to='/sales'><AttachMoneyIcon></AttachMoneyIcon> Sales</Link>
                    </li>
                    <li className='item'>
                    <Link to='/vendors'><ShoppingCartIcon></ShoppingCartIcon> Vendors</Link>
                    </li>
                    {/* <li className='item'>
                    <a class="products text-white" data-bs-toggle="collapse" href="#multiCollapseExample2" role="button" aria-expanded="false" aria-controls="multiCollapseExample2"><ListAltIcon></ListAltIcon> Orders</a>
                    <div class="row">
                        <div class="col">
                            <div class="collapse multi-collapse" id="multiCollapseExample2">
                            <div class="card card-body dark">
                                <ul>
                                   <Link to='/orders'><li>All Orders</li></Link>
                                    <Link to='/neworders'><li>New Orders</li></Link>
                                    <Link to='/returnorders'><li>Return Orders</li></Link>
                                    <Link to='/cancelorders'><li>Cancel Orders</li></Link>
                                    <Link to='/completedorders'><li>Completed Orders</li></Link>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                    </li> */}
                    <li className='item'>
                    <Link to='/login'>Login/ Sign Up</Link></li>
                    </ul>
                    </div>
                </div>
            </div>
    );
};

export default Sidebar;