export default function Footer() {
    return (
        <footer>
            <div className="container-fluid bg-dark">
                <footer className="text-center text-lg-start text-white">
                    <div className="container p-4 pb-0">
                        <section className="">
                            <div className="row">
                                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">
                                        Company name
                                    </h6>
                                    <p>
                                        Here you can use rows and columns to organize your footer
                                        content. Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit.
                                    </p>
                                </div>

                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                                    <p><a className="text-white text-decoration-none">MDBootstrap</a></p>
                                    <p><a className="text-white text-decoration-none">MDWordPress</a></p>
                                    <p><a className="text-white text-decoration-none">BrandFlow</a></p>
                                    <p><a className="text-white text-decoration-none">Bootstrap Angular</a></p>
                                </div>

                                <hr className="w-100 clearfix d-md-none" />
                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
                                    <p><a className="text-white text-decoration-none">Your Account</a></p>
                                    <p><a className="text-white text-decoration-none">Become an Affiliate</a></p>
                                    <p><a className="text-white text-decoration-none">Shipping Rates</a></p>
                                    <p><a className="text-white text-decoration-none">Help</a></p>
                                </div>
                                <hr className="w-100 clearfix d-md-none" />
                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                    <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                                    <p><i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
                                    <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                                    <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                                </div>
                            </div>
                        </section>
                        <hr className="my-3" />
                        <section className="p-3 pt-0">
                            <div className="row d-flex align-items-center">
                                <div className="col-md-7 col-lg-8 text-center text-md-start">
                                    <div className="p-3">
                                        © 2024 Copyright : <a className="text-white text-decoration-none" href="https://prothesbarai.github.io/prothesbarai/"> Developer Prothes</a>
                                    </div>
                                </div>
                                <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                                    <a className="btn btn-outline-secondary btn-floating m-1 text-white" role="button"><i className="fab fa-facebook"></i></a>
                                    <a className="btn btn-outline-secondary btn-floating m-1 text-white" role="button"><i className="fab fa-instagram"></i></a>
                                    <a className="btn btn-outline-secondary btn-floating m-1 text-white" role="button"><i className="fab fa-linkedin"></i></a>
                                    <a className="btn btn-outline-secondary btn-floating m-1 text-white" role="button"><i className="fab fa-github"></i></a>
                                    <a className="btn btn-outline-secondary btn-floating m-1 text-white" role="button"><i className="fab fa-youtube"></i></a>
                                    <a className="btn btn-outline-secondary btn-floating m-1 text-white" role="button"><i className="fas fa-globe"></i></a>
                                </div>
                            </div>
                        </section>
                    </div>
                </footer>
            </div>
        </footer>
    )
}
