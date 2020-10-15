import React from "react";
import "./style.css";
// import { withRouter } from 'react-router-dom'
import { Link } from "react-router-dom";

export default function Header({ history }) {
  return (
    <div className=" __dml header">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Store</Link>
        </li>
        <li>
          <Link to="/about">About Us </Link>
        </li>
      </ul>
    </div>
  );
}

// function Header({ history}) {
//     return (
//         <div className=' __dml header'>
//            <ul>
//            <li>
//             <a onClick={() => history.push('/')}>Home</a></li>
//             <li><a onClick={() => history.push('/about')}>About Us  </a></li>
//             </ul>
//         </div>
//     )
// }

// export default withRouter(Header)
