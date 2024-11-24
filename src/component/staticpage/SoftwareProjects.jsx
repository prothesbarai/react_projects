export default function SoftwareProjects() {
    return (
        <>
            <div className="container py-5">
                {/* Header */}
                <h1 className="text-center mb-5">My Software Projects</h1>

                {/* Introduction Section */}
                <section className="mb-5">
                    <div className="row">
                        <div className="col-md-6">
                            <img
                                src="https://www.shinebrightx.com/images/blog/software-development-projects.jpg"
                                alt="Coding"
                                className="img-fluid rounded shadow"
                            />
                        </div>
                        <div className="col-md-6 d-flex align-items-center">
                            <div>
                                <h2>About My Projects</h2>
                                <p>
                                    I have worked on diverse software projects ranging from mobile applications
                                    to web development. My focus is on creating robust, user-friendly, and efficient
                                    solutions. Below is a showcase of some of my key projects, highlighting their
                                    features and technologies.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section>
                    <div className="row">
                        {/* Project 1 */}
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100 shadow">
                                <img src="https://www.mediakind.com/wp-content/uploads/2022/08/primecast.png" className="card-img-top" alt="PrimeCast IPtv Application" height={200} />
                                <div className="card-body">
                                    <h5 className="card-title">PrimeCast IPtv Application</h5>
                                    <p className="card-text">
                                        A powerful application for streaming live TV channels with modern UI, playback controls,
                                        and high-quality video settings.
                                    </p>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Language: Java</li>
                                        <li className="list-group-item">Framework: Exoplayer</li>
                                        <li className="list-group-item">Platform: Android</li>
                                    </ul>
                                    <a
                                        href="https://github.com/prothesbarai/PrimeCast"
                                        className="btn btn-primary mt-3"
                                        target="_blank" rel="noopener noreferrer"
                                    >
                                        View on GitHub
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Project 2 */}
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100 shadow">
                                <img src="https://img.freepik.com/premium-vector/emergency-call-flat-illustration-with-red-emergency-call-concept-design-emergency-call-center-app-hotline-help-desk-vector-illustration_735449-497.jpg?w=360" className="card-img-top" alt="Emergency Help Application" height={200} />
                                <div className="card-body">
                                    <h5 className="card-title">Emergency Help Application</h5>
                                    <p className="card-text">
                                        An essential app providing hotline and emergency services contact information, with a sleek
                                        UI and offline accessibility.
                                    </p>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Language: Java</li>
                                        <li className="list-group-item">Libraries: Lottie, Glide</li>
                                        <li className="list-group-item">Platform: Android</li>
                                    </ul>
                                    <a
                                        href="https://github.com/prothesbarai/emergency_help_application"
                                        className="btn btn-primary mt-3"
                                        target="_blank" rel="noopener noreferrer"
                                    >
                                        View on GitHub
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Project 3 */}
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100 shadow">
                                <img height={200} src="https://www.wisdomgeek.com/wp-content/uploads/2017/03/json-920x518.jpg.webp" className="card-img-top" alt="ArrayList App from JSONArray Parsing"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">ArrayList App from JSONArray Parsing</h5>
                                    <p className="card-text">
                                        Demonstrates JSON parsing with custom adapters and smooth integration of
                                        parsed data into list <br /> views.
                                    </p>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Technology: JSON Parsing</li>
                                        <li className="list-group-item">Libraries: Glide</li>
                                        <li className="list-group-item">Platform: Android</li>
                                    </ul>
                                    <a
                                        href="https://github.com/prothesbarai/ArrayList_App_From_JSONArray_Parsing"
                                        className="btn btn-primary mt-3"
                                        target="_blank" rel="noopener noreferrer"
                                    >
                                        View on GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Call to Action */}
                <div className="text-center mt-5">
                    <h2>Explore More Projects</h2>
                    <p>Visit my GitHub profile for more open-source contributions and detailed project descriptions.</p>
                    <a
                        href="https://github.com/prothesbarai"
                        className="btn btn-outline-secondary btn-lg"
                        target="_blank" rel="noopener noreferrer"
                    >
                        View All Projects on GitHub
                    </a>
                </div>

                {/* Testimonials Section */}
                <section className="my-5 pt-5">
                    <div className="container">
                        <h2 className="text-center mb-4">What People Say About My Projects</h2>
                        <div className="row">
                            {/* Testimonial 1 */}
                            <div className="col-md-4">
                                <div className="card shadow h-100">
                                    <div className="card-body">
                                        <p className="card-text">
                                            The PrimeCast IPtv app is revolutionary! It has a seamless user interface and
                                            works flawlessly for streaming live TV channels. Highly recommend!
                                        </p>
                                        <h5 className="card-title">- John Doe</h5>
                                    </div>
                                </div>
                            </div>
                            {/* Testimonial 2 */}
                            <div className="col-md-4">
                                <div className="card shadow h-100">
                                    <div className="card-body">
                                        <p className="card-text">
                                            Prothes Emergency Help app has been a lifesaver. The attention to detail and
                                            functionality are unmatched. Fantastic work!
                                        </p>
                                        <h5 className="card-title">- Jane Smith</h5>
                                    </div>
                                </div>
                            </div>
                            {/* Testimonial 3 */}
                            <div className="col-md-4">
                                <div className="card shadow h-100">
                                    <div className="card-body">
                                        <p className="card-text">
                                            Amazing work on JSON parsing and ArrayLists! The project helped me understand
                                            these concepts better. Great developer!
                                        </p>
                                        <h5 className="card-title">- Alex Lee</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Technologies Summary */}
<section className="my-5 py-5">
    <div className="container">
        <h2 className="text-center mb-4">Technologies I Work With</h2>
        <div className="row text-center">
            <div className="col-md-3">
                <i className="fab fa-java fa-4x mb-3 text-primary"></i>
                <h5>Java</h5>
            </div>
            <div className="col-md-3">
                <i className="fab fa-react fa-4x mb-3 text-primary"></i>
                <h5>React</h5>
            </div>
            <div className="col-md-3">
                <i className="fab fa-python fa-4x mb-3 text-primary"></i>
                <h5>Python</h5>
            </div>
            <div className="col-md-3">
                <i className="fab fa-android fa-4x mb-3 text-primary"></i>
                <h5>Android</h5>
            </div>
        </div>
    </div>
</section>


{/* Project Timeline */}
<section className="my-5">
    <div className="container text-center">
        <h2 className="text-center mb-5">My Development Journey</h2>
        <div className="timeline">
            {/* Timeline Item 1 */}
            <div className="timeline-item">
                <h5>2020</h5>
                <p>
                    Started working on my first Android application - 
                    <strong> Emergency Help App</strong>, focusing on
                    essential services for users.
                </p>
            </div>
            {/* Timeline Item 2 */}
            <div className="timeline-item">
                <h5>2021</h5>
                <p>
                    Developed <strong>PrimeCast IPtv</strong>, introducing 
                    advanced video streaming capabilities.
                </p>
            </div>
            {/* Timeline Item 3 */}
            <div className="timeline-item">
                <h5>2022</h5>
                <p>
                    Enhanced JSON parsing skills with 
                    <strong>ArrayList App</strong>, integrating JSON 
                    data with interactive user interfaces.
                </p>
            </div>
        </div>
    </div>
</section>




            </div>
        </>
    );
}
