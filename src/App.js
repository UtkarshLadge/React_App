import React from 'react';
import Timer from './Timer';
import './App.css'; // Import CSS file if needed

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Utkarsh</a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contacts</a>
            </li>
          </ul>
        </div>
      </nav>
      <Timer />
      <div className="container">
        <section style={{ display: 'flex' }}>
          <div style={{ verticalAlign: 'top' }}>
            <h3>Hello, It's Me</h3>
            <h2>Utkarsh</h2>
            <h3>And I'm a <span style={{ color: 'orangered' }}>Frontend Developer|</span></h3>
            <div className="content">
              <div className="P1">
                <p>I love building websites and pour my dedication into making them awesome. I'm committed to my work and always strive for excellence.</p>
              </div>
            </div>
            <button type="button" className="btn btn-primary">Contact</button>
          </div>
          <div className="img" style={{ display: 'inline-block', marginRight: '250px' }}>
            <div className="image">
              <img src="boy.jpg" alt="Boy" style={{ width: '350px', height: '350px' }} />
            </div>
          </div>
        </section>
      </div>
      <div className="container">
        <h2 className="text-center">About me</h2>
        <div className="paragraph-container">
          <p>As a dynamic and risk-seeking individual, I am fueled by a passion for exploring possibilities and pushing boundaries in the ever-evolving field of technology. Committed to delivering high-quality work without compromise, I bring a fresh perspective and enthusiasm to every project I undertake. Having recently completed my journey as a full-stack web development learner, I am excited to apply my newfound skills and knowledge to real-world projects. Despite being a fresher, I have successfully executed a few projects that showcase my dedication and ability to adapt quickly to emerging technologies.</p>
        </div>
        <div className="text-center">
          <button type="button" className="btn btn-primary">Resume</button>
        </div>
      </div>
      <div className="container-fluid">
        <h1 className="text-center">Skills</h1>
        <p className="text-center">Professional Skills and Tools</p>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-4 mb-4">
                  <div className="bg-white border rounded shadow-sm text-center d-flex align-items-center justify-content-center">
                    <img src="react.png" alt="React" style={{ maxWidth: '100%', height: 'auto' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container-fluid">
        <h1 className="text-center">Projects</h1>
        <p className="text-center">Here you can find some of the projects that I created</p>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <div className="card mt-5">
                <div className="row">
                  <div className="col-md-6">
                    <div className="card">
                      <img src="zen.jpeg" className="card-img-top" alt="Zen Query Ticketing" />
                      <div className="card-body">
                        <h5 className="card-title text-center">Zen Query Ticketing</h5>
                        <p className="card-title text-center">The platform allows users to raise tickets based on their queries, and mentors can provide solutions.</p>
                        <p className="card-text text-center"><a href="#" className="text-decoration-underline">See Live GitHub Repo</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-light py-3 py-md-5">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h2 className="mb-4 display-5 text-center">Contact</h2>
              <p className="text-secondary mb-5 text-center">Submit the form below so I can get back to you as soon as possible</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-lg-center">
            <div className="col-12 col-lg-9">
              <div className="bg-white border rounded shadow-sm overflow-hidden">
                <form action="#!">
                  <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
                    <div className="col-12">
                      <label htmlFor="fullname" className="form-label">Full Name <span className="text-danger"></span></label>
                      <input type="text" className="form-control" id="fullname" name="fullname" value="" required />
                    </div>
                    <div className="col-12">
                      <label htmlFor="email" className="form-label">Email <span className="text-danger"></span></label>
                      <input type="email" className="form-control" id="email" name="email" value="" required />
                    </div>
                    <div className="col-12">
                      <label htmlFor="message" className="form-label">Message <span className="text-danger">*</span></label>
                      <textarea className="form-control" id="message" name="message" rows="3" required></textarea>
                    </div>
                    <div className="col-12">
                      <div className="d-grid">
                        <button className="btn btn-primary btn-lg" type="submit">Submit</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
