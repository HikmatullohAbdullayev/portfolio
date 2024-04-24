import React from 'react';

function Header(props) {
    
    return (
        <header className='flex justify-between items-center py-5 '>
            <h1 className='text-[24px] font-[Pacifico] '><a href="/">Hikmatulloh</a></h1> 
            <nav>
                <ul className='flex justify-between items-center gap-5'>
                    <li>
                        <a className='text-[20px} hover:text-[#375A7F]' href="/project">Loyihalar</a>
                    </li>
                    <li>
                        <a className='text-[20px}  hover:text-[#375A7F]' target='blank' href="https://github.com/HikmatullohAbdullayev">Git hub</a>
                    </li>
                   
                    </ul>
            </nav>

            
        </header>
    );
}

export default Header;