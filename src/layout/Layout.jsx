import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const url = location.pathname;


  return (
    <div className="md:flex md:min-h-screen">
      <div className="md:w-1/4 bg-blue-900 px-5 py-10">
        <h2 className="text-4xl font-black text-center text-white">
          CRM - Clientes
        </h2>
        <nav className="mt-10">
          <Link className={ url === '/clients' ? 'text-white text-2xl block mt-2 text-blue-300':'text-white text-2xl block mt-2 hover:text-blue-300' } to="/clients" >Clientes</Link>
          <Link className={url === '/clients/new' ? 'text-white text-2xl block mt-2 text-blue-300':'text-white text-2xl block mt-2 hover:text-blue-300'  } to="/clients/new">Nuevo cliente</Link>
        </nav>
      </div>
      <div className="md:w-3/4 p-10 md:h-screen overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

//  hover:text-blue-300