import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-100 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <a href="/" className="text-xl font-bold text-gray-800">Navbar</a>
          <ul className="flex space-x-4">
            <li className="nav-item">
              <a href="/" className="nav-link active">Home</a>
            </li>
          </ul>
        </div>

        <div className="flex items-center space-x-4">
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>

          <div className="flex items-center space-x-4">
            <a href="#" className="nav-link">Notifications</a>
            <a href="#" className="nav-link">Signup</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;