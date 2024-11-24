export default function About() {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-4 text-center">
                    <img
                        src="https://prothesbarai.github.io/prothesbarai/img/about_section.png" alt="Prothes Barai" className="img-fluid  mb-3" width={400}/>
                </div>
                <div className="col-md-8">
                    <h1 className="mb-3">About Me</h1>
                    <p>
                        My name is Prothes Barai. I was born on July 15, 1999, in Somairpar village, Barisal District. I have over five years of experience in web design and development, with expertise in creating dynamic and visually engaging websites. My mission is to deliver exceptional service by understanding client requirements and providing tailored solutions.
                    </p>
                    <p>
                        I graduated in 2022 with a Bachelor’s degree in Computer Science and Engineering. I’m passionate about learning new technologies and applying innovative solutions to solve problems effectively.
                    </p>
                    <ul className="list-unstyled mt-4">
                        <li className="my-3"><strong>Birthday:</strong> July 15, 1999</li>
                        <li className="my-3"><strong>Degree:</strong> BSc in CSE</li>
                        <li className="my-3"><strong>Experience:</strong> 5+ years</li>
                        <li className="my-3"><strong>Email:</strong> developerprothes16@gmail.com</li>
                        <li className="my-3"><strong>Phone:</strong> +8801317818826</li>
                        <li className="my-3"><strong>Freelance:</strong> Available</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="row mt-4">
                <div className="col-md-6">
                    <h3>My Skills</h3>
                    <p>
                        Proficient in HTML, CSS, JavaScript, Bootstrap, Python, and Django. Skilled in full-stack web development, dynamic website creation, and software development.
                    </p>
                </div>
                <div className="col-md-6">
                    <h3>Why Choose Me?</h3>
                    <ul>
                        <li>Unique designs with optimized code</li>
                        <li>Fast delivery and bug-free solutions</li>
                        <li>Comprehensive client support and guidance</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}


