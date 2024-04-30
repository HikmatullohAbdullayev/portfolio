import aboutImg from "../assets/img/space.webp"


function About() {
    return (
        <section>
            <div className=" w-[300px] mx-auto ">
                <img className="w-full " src={aboutImg} alt="space img" />
            </div>
            <div className="info">
                <h1>Hikmatulloh</h1>
                <p>Frontend dasturchi (React)</p>
            </div>
            <div className="content">
                <h2>
                    Men haqimda
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora voluptatem maiores officiis vitae adipisci cumque perferendis assumenda sed? Dolore ipsam eum perferendis adipisci officiis voluptatem atque illo a dolorem tempora?</p>
            </div>
            <div className="btn">
                <button>Loyihalar</button>
            </div>
            
        </section>
    );
}

export default About;