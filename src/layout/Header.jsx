import React from 'react';

function Header(props) {
    return (
        <header className='flex justify-between items-center '>
            <h1><a href="/">Hikmatulloh</a></h1> 
            <nav>
                <ul className='flex justify-between items-center gap-5'>
                    <li>
                        <a href="/project">Loyihalar</a>
                    </li>
                    <li>
                        <a href="/blog">Blog</a>
                    </li>
                    </ul>
            </nav>
            
        </header>
    );
}

export default Header;