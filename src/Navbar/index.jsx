import React from "react";

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">MENU</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>bo'limlar</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Gallery</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
