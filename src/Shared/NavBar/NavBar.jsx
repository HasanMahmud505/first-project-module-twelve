

const NavBar = () => {

    const navOptions = <>
        <li><a>Home</a></li>
        <li><a>CONTACT US</a></li>
        <li><a>DASHBOARD</a></li>
        <li><a>Our Menu</a></li>
        <li tabIndex={0}>
            <a className="justify-between">
                Our Shop
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
            </a>
            <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
            </ul>
        </li>

    </>
    return (
        <div>
            <div className="navbar fixed z-10 max-w-screen-xl text-white bg-opacity-30 bg-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">
                        BISTRO BOSS
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>SIGN OUT</a></li>
                    </ul>
                    <a className="btn">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;