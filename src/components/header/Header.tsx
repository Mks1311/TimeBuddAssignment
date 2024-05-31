
import SideBar from "./SideBar";
function Header() {
    const NavList=['Home', 'About', 'Partner with us', 'Contact','Locate Charger'];
    // const closeMenuOnMobile = () => {
    //     if (window.innerWidth <= 1150) {
    //         setShowMenu(false);
    //     }
    // };
    return (
        <div className="w-full fixed top-0 left-0 bg-black z-50 px-5">
            <nav className="w-full h-[3.5rem] px-[1rem] text-white flex justify-between items-center ">
                <div className="text-2xl">
                    SOCKET
                </div>
                <div>
                    <ul className="hidden md:flex gap-9 h-full items-center text-lg">
                        <li>
                            Home
                        </li>
                        <li>
                            About
                        </li>
                        <li>
                            Partner with us
                        </li>
                        <li>
                            Contact
                        </li>
                        <li className="bg-green-300 px-3 py-1 rounded-2xl text-black">
                            Locate Charger
                        </li>
                    </ul>
                </div>
                
                <div className="md:hidden">
                    <SideBar NavList={NavList} />
                </div>
            </nav>



        </div>
    )
}

export default Header
