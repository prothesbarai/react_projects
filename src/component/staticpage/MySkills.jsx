export default function MySkills() {
    return (
        <div className="container my-5">
            <h1 className="text-center mb-5">My Skills</h1>
            {/* Personal Skills Section */}
            <section className="mb-5">
                <h2 className="mb-4">Personal Skills</h2>
                <div className="row">
                    <div className="col-md-6">
                        <ul className="list-group">
                            <li className="list-group-item d-flex align-items-center">
                                <i className="bi bi-person-check me-3 text-primary"></i> Active Listening
                            </li>
                            <li className="list-group-item d-flex align-items-center">
                                <i className="bi bi-shield-check me-3 text-success"></i> Integrity
                            </li>
                            <li className="list-group-item d-flex align-items-center">
                                <i className="bi bi-lightbulb-fill me-3 text-warning"></i> Creative Thinking
                            </li>
                            <li className="list-group-item d-flex align-items-center">
                                <i className="bi bi-brain me-3 text-danger"></i> Problem Solving
                            </li>
                            <li className="list-group-item d-flex align-items-center">
                                <i className="bi bi-arrows-move me-3 text-info"></i> Adaptability
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul className="list-group">
                            <li className="list-group-item d-flex align-items-center">
                                <i className="bi bi-chat-left-dots me-3 text-secondary"></i> Communication
                            </li>
                            <li className="list-group-item d-flex align-items-center">
                                <i className="bi bi-people me-3 text-primary"></i> Leadership
                            </li>
                            <li className="list-group-item d-flex align-items-center">
                                <i className="bi bi-journal-check me-3 text-success"></i> Responsibility
                            </li>
                            <li className="list-group-item d-flex align-items-center">
                                <i className="bi bi-lightbulb me-3 text-warning"></i> Knowledge Acquisition
                            </li>
                            <li className="list-group-item d-flex align-items-center">
                                <i className="bi bi-layers me-3 text-danger"></i> Interpersonal Skills
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Professional Skills Section */}
            <section>
                <h2 className="mb-4">Professional Skills</h2>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="mb-3">
                            <label className="form-label">HTML</label>
                            <div className="progress">
                                <div className="progress-bar bg-success" style={{ width: '100%' }}>
                                    100%
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">XML</label>
                            <div className="progress">
                                <div className="progress-bar bg-warning" style={{ width: '100%' }}>
                                    100%
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">CSS</label>
                            <div className="progress">
                                <div className="progress-bar bg-primary" style={{ width: '99%' }}>
                                    99%
                                </div>
                            </div>
                        </div>
                        
                        <div className="mb-3">
                            <label className="form-label">PHP</label>
                            <div className="progress">
                                <div className="progress-bar bg-secondary" style={{ width: '99%' }}>
                                    80%
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Bootstrap</label>
                            <div className="progress">
                                <div className="progress-bar bg-info" style={{ width: '100%' }}>
                                    100%
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="mb-3">
                            <label className="form-label">JavaScript</label>
                            <div className="progress">
                                <div className="progress-bar bg-warning" style={{ width: '95%' }}>
                                    95%
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Python</label>
                            <div className="progress">
                                <div className="progress-bar bg-danger" style={{ width: '100%' }}>
                                    100%
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">MySQL</label>
                            <div className="progress">
                                <div className="progress-bar bg-secondary" style={{ width: '100%' }}>
                                    100%
                                </div>
                            </div>
                        </div>
                        
                        <div className="mb-3">
                            <label className="form-label">FireBase</label>
                            <div className="progress">
                                <div className="progress-bar bg-info" style={{ width: '100%' }}>
                                    100%
                                </div>
                            </div>
                        </div>
                        
                        <div className="mb-3">
                            <label className="form-label">Java</label>
                            <div className="progress">
                                <div className="progress-bar bg-secondary" style={{ width: '100%' }}>
                                    100%
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
