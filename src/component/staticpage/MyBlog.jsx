export default function MyBlog() {
    return (
        <>
            <div className="container py-5">
                {/* Blog Header */}
                <h1 className="text-center mb-5">My Blog</h1>
                
                <div className="row">
                    {/* Blog Post 1 */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100 shadow">
                            <img
                                src="https://via.placeholder.com/400x250"
                                className="card-img-top"
                                alt="Blog 1"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Blog Post Title 1</h5>
                                <p className="card-text">
                                    This is a short summary of the first blog post. It gives readers a quick preview of the topic.
                                </p>
                                <a href="#!" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>

                    {/* Blog Post 2 */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100 shadow">
                            <img
                                src="https://via.placeholder.com/400x250"
                                className="card-img-top"
                                alt="Blog 2"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Blog Post Title 2</h5>
                                <p className="card-text">
                                    This is a short summary of the second blog post. Dive deeper into this intriguing topic.
                                </p>
                                <a href="#!" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>

                    {/* Blog Post 3 */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100 shadow">
                            <img
                                src="https://via.placeholder.com/400x250"
                                className="card-img-top"
                                alt="Blog 3"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Blog Post Title 3</h5>
                                <p className="card-text">
                                    A quick glimpse into the third blog post. Find out more by clicking below.
                                </p>
                                <a href="#!" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>

                    {/* Blog Post 4 */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100 shadow">
                            <img
                                src="https://via.placeholder.com/400x250"
                                className="card-img-top"
                                alt="Blog 4"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Blog Post Title 4</h5>
                                <p className="card-text">
                                    Explore the highlights of this fourth post. A must-read for those interested.
                                </p>
                                <a href="#!" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>

                    {/* Blog Post 5 */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100 shadow">
                            <img
                                src="https://via.placeholder.com/400x250"
                                className="card-img-top"
                                alt="Blog 5"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Blog Post Title 5</h5>
                                <p className="card-text">
                                    Curious about this topic? Read a summary and access the full blog post here.
                                </p>
                                <a href="#!" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>

                    {/* Blog Post 6 */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100 shadow">
                            <img
                                src="https://via.placeholder.com/400x250"
                                className="card-img-top"
                                alt="Blog 6"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Blog Post Title 6</h5>
                                <p className="card-text">
                                    Wrap up with this exciting sixth blog post. Read more by clicking below.
                                </p>
                                <a href="#!" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

