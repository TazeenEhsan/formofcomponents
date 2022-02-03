import React from 'react';

import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';



import './Header.css'

const Header = () => {

    const { user, admin, logOut } = useAuth();

    return (
        <div className="pt-5" style={{ backgroundColor: 'black', padding: '5px' }}>

            <div className="row gx-0">
                <div className="col-lg-4 col-sm-12 ">
                    <Link className="nav-con-link" to='/'> <h4>Form</h4></Link>




                </div>
                <div className="col-lg-8 col-sm-12">




                </div>

            </div>

        </div>






    );
};

export default Header;