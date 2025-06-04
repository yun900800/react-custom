import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateUser } from '../lib/store';
import styles from './breadcrumb.module.css'; // Assuming you have a CSS module for styles

const Breadcrumb = ({ links }) => {
  return (
    <>
      <ul className={styles['sidebar-nav']}>
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
        <li>
          <Logout />
        </li>
      </ul>
    </>
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