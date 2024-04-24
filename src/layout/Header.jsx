import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="py-[12px] flex justify-between items-center">
            
            <Link to="/" className=" text-[24px] font-[Pacifico] font-semibold tracking-[4px] transition-all duration-[0.7s] ease-in-out hover:tracking-[1.3px]" >
                Hikmatulloh
            </Link>
            
            
            <nav>
                <ul className="flex justify-between items-center gap-5">
                    <li>

                      <Link to='/project'>Loyihalar</Link>
                    </li>
                    <li>

                     <Link to='/project'>Git hub</Link>
                    </li>
                </ul>
            </nav>
            <div className="theme">
                <button>
                    den
                </button>
            </div>
            
        </div>
    );
}

export default Header;