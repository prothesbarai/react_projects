import { useEffect } from "react";
import { initializeValidation, setupSweetAlert } from "..//../utils/formValidation";

export default function Contact() {
  useEffect(() => {
    initializeValidation(); // Validation চালু করা
    setupSweetAlert();      // SweetAlert যুক্ত করা
  }, []);
    return (
        <div>
            <div className="container-fluid py-5" id="contact">
                <div className="container">
                    <div className="position-relative d-flex align-items-center justify-content-center">
                        <h1 className="display-1 text-uppercase text-white" style={{ WebkitTextStroke: '1px #dee2e6' }}>Contact</h1>
                        <h1 className="position-absolute text-uppercase text-primary"><u>Contact Me</u></h1>
                    </div>
                    <div className="row justify-content-center mt-5">
                        <div className="col-lg-8">
                            <div className="contact-form text-center">
                                <div id="success"></div>
                                <form action="" method="POST" className="needs-validation" noValidate>
                                    <div className="form row">
                                        <div className="control-group col-lg-6">
                                            <input type="text" className="form-control p-4 mt-3" id="Name" placeholder="Your Name" name="Name" required/>
                                                <div className="invalid-feedback">
                                                    Please Enter Your Name.
                                                </div>
                                        </div>
                                        <div className="control-group col-lg-6">
                                            <input type="email" className="form-control p-4 mt-3" id="Email" placeholder="Your Email" name="Email" required />
                                            <div className="invalid-feedback">
                                                Please Enter Your Valid Email.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form row">
                                        <div className="control-group col-lg-6">
                                            <input type="text" className="form-control p-4 mt-3" id="Subject" placeholder="Subject" name="Subject" required />
                                            <div className="invalid-feedback">
                                                Please Enter Your Subject.
                                            </div>
                                        </div>
                                        <div className="control-group col-lg-6">
                                            <input type="number" min="999999999" max="9999999999" className="form-control p-4 mt-3" id="Phone" placeholder="Your Phone Number" name="Phone" required maxLength={10} minLength={10}/>
                                            <div className="invalid-feedback">
                                                Please Enter Your Valid Number.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="control-group">
                                        <textarea className="form-control py-3 px-4 mt-3" rows="5" id="Message" placeholder="Message" name="Message" required></textarea>
                                        <div className="invalid-feedback">
                                            Please Enter Your Meaasge.
                                        </div>
                                    </div>
                                    <div>
                                        <button className="btn btn-outline-primary my-5" type="submit" id="submit">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
