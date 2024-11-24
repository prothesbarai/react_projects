export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <header id="header" className="d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundImage: 'url(https://png.pngtree.com/thumb_back/fh260/background/20230217/pngtree-blue-wavy-banner-background-blank-image_1608934.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container text-center">
          <h1 className="text-white display-4 animate__animated animate__fadeIn">Welcome to My Portfolio</h1>
          <p className="lead text-white animate__animated animate__fadeIn animate__delay-1s">Im Prothes Barai, a passionate developer</p>
          <a href="https://prothesbarai.github.io/prothesbarai/index.html" target="_blank" className="btn btn-primary btn-lg animate__animated animate__fadeIn animate__delay-2s">My Website</a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="about py-5">
        <div className="container text-center">
          <h2 className="section-title animate__animated animate__fadeIn">About Me</h2>
          <div className="row">
            <div className="col-lg-6">
              <img src="https://avatars.githubusercontent.com/u/75435992?v=4" alt="About Me" className="img-fluid rounded-circle shadow-lg" />
            </div>
            <div className="col-lg-6 text-center align-items-center align-content-center">
              <h3 className="animate__animated animate__fadeIn">Hello, Im Prothes!</h3>
              <p className="animate__animated animate__fadeIn">
                I specialize in software development and building web applications. I love coding, problem-solving, and creating solutions that make life easier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills bg-light py-5">
        <div className="container text-center">
          <h2 className="section-title animate__animated animate__fadeIn">My Skills</h2>
          <div className="row">
            <div className="col-md-3">
              <div className="skill-box animate__animated animate__fadeIn">
                <i className="fab fa-react fa-4x mb-3"></i>
                <h5>React</h5>
              </div>
            </div>
            <div className="col-md-3">
              <div className="skill-box animate__animated animate__fadeIn">
                <i className="fab fa-js fa-4x mb-3"></i>
                <h5>JavaScript</h5>
              </div>
            </div>
            <div className="col-md-3">
              <div className="skill-box animate__animated animate__fadeIn">
                <i className="fab fa-python fa-4x mb-3"></i>
                <h5>Python</h5>
              </div>
            </div>
            <div className="col-md-3">
              <div className="skill-box animate__animated animate__fadeIn">
                <i className="fab fa-html5 fa-4x mb-3"></i>
                <h5>HTML5</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects py-5">
        <div className="container text-center">
          <h2 className="section-title animate__animated animate__fadeIn">My Projects</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card">
                <img src="https://via.placeholder.com/400x250" alt="Project 1" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Project 1</h5>
                  <p className="card-text">A description of the first project.</p>
                  <a href="#!" className="btn btn-primary">View Project</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <img src="https://via.placeholder.com/400x250" alt="Project 2" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Project 2</h5>
                  <p className="card-text">A description of the second project.</p>
                  <a href="#!" className="btn btn-primary">View Project</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <img src="https://via.placeholder.com/400x250" alt="Project 3" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Project 3</h5>
                  <p className="card-text">A description of the third project.</p>
                  <a href="#!" className="btn btn-primary">View Project</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
}

