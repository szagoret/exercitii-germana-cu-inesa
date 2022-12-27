import {Logo} from "app/components/Logo";
import Link from "next/link";

const Header = () => {
    return (
        <header className="sticky top-0 z-50 shadow">
            <div className="navbar bg-base-100  backdrop-blur-xl bg-white/75">
                <div className="navbar-start">
                    <Link href="/">
                        <Logo/>
                    </Link>
                </div>
                <div className="navbar-center">
                    <div className="flex flex-col">
                        <a className="normal-case text-xl">Germana cu Inesa</a>
                        <progress className="progress progress-accent w-56 mt-2" value="40" max="100"></progress>
                    </div>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people"/>
                            </div>
                        </label>
                        <ul tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">Profile</a>
                            </li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;