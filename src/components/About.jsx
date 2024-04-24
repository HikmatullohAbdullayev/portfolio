import React from 'react';



function About(props) {
    return (
        <div className="about">
            <div >
           <div className="info">
           <h1 className='font-[Pacifico] text-[42px] mb-2'>Hikmatulloh</h1>
            <p className='py-[1.5px] px-[4.5px] inline-block rounded-[5px] bg-[#584966] text-[14px] font-semibold '>Frontend dasturchi (React)</p> 
           </div>
            <div className="text pt-10">
                <h3  className='font-[Pacifico] text-[34px] '>About</h3>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni sed provident sapiente numquam laudantium repellendus iure eos pariatur, nesciunt sit repellat culpa aliquid itaque nostrum, commodi corporis soluta. Maxime, optio.
            </div>
            <div className="w-full text-center pt-10 mb-20">
                <button className='py-1 px-2  border-[2px] border-solid border-[#78C2AD] rounded-lg hover:bg-[#78C2AD] hover:text-[#1E1E2E]'>
                    <a className='bg-transparent font-semibold' href="/project">Loyihalar</a>
                </button>
            </div>
        </div>
        <div className="skill">
        <h3  className='font-[Pacifico] text-[34px] '>Skill</h3>
        <div className="img">
            <a className='' href="https://www.w3schools.com/html/default.asp" target="_blank" rel="noopener noreferrer">
            <img className='w-[50px]' src="/public/html.png" alt="html" />
            </a>
            <a className='' href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">
            <img className='w-[50px]' src="/public/file-type-css.svg" alt="sass" />
            </a>
            <a className='' href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">
            <img className='w-[50px]' src="https://sass-lang.com/assets/img/logos/logo.svg" alt="sass" />
            </a>
            <a className='' href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">
            <img className='w-[50px]' src="https://sass-lang.com/assets/img/logos/logo.svg" alt="sass" />
            </a>
            <a className='' href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">
            <img className='w-[50px]' src="https://sass-lang.com/assets/img/logos/logo.svg" alt="sass" />
            </a>
        </div>
        </div>
        </div>
    );
}

export default About;