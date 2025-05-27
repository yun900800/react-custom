import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateUser } from '../lib/store'

const Breadcrumb = ({ links }) => {
  return (
    <nav className="st-menu st-effect-1">
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
        <li>
          <Logout />
        </li>
      </ul>
    </nav>
  );
};

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () =>{
    dispatch(updateUser(null));
    navigate('/login');
  }
  return (
    <a onClick={handleLogout}>退出</a>
  )
}

export default Breadcrumb;