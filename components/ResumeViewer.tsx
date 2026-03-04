import React from 'react';
import { useNavigate } from 'react-router-dom';

const ResumeViewer: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-50  text-slate-900  py-12 px-6 font-sans transition-colors duration-300">
            <div className="max-w-4xl mx-auto flex justify-between items-center mb-10">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-slate-600  hover:text-primary  transition-colors font-medium group"
                >
                    <i className="fa-solid fa-arrow-left transition-transform group-hover:-translate-x-1"></i> Back to Portfolio
                </button>
                <a
                    href="/resume.pdf"
                    download
                    className="px-6 py-2.5 bg-primary hover:bg-primary-hover text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                >
                    <i className="fa-solid fa-file-pdf"></i> Download PDF
                </a>
            </div>

            <div className="max-w-4xl mx-auto bg-white  shadow-2xl rounded-2xl overflow-hidden border border-slate-200  p-10 md:p-16">

                {/* Header */}
                <header className="text-center border-b-2 border-primary/20 pb-8 mb-10">
                    <h1 className="text-4xl font-bold font-display text-slate-900  mb-2">Ambalavanan M</h1>
                    <div className="text-xl text-primary font-semibold mb-6">Software Developer</div>
                    <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600 ">
                        <span className="flex items-center gap-2"><i className="fa-solid fa-phone"></i> +91 9894797490</span>
                        <span className="hidden md:inline text-slate-300 ">|</span>
                        <a href="mailto:ambalavanan275@gmail.com" className="hover:text-primary transition-colors flex items-center gap-2"><i className="fa-solid fa-envelope"></i> ambalavanan275@gmail.com</a>
                        <span className="hidden md:inline text-slate-300 ">|</span>
                        <a href="https://github.com/ambalavanan01" className="hover:text-primary transition-colors flex items-center gap-2"><i className="fa-brands fa-github"></i> github.com/ambalavanan01</a>
                        <span className="hidden md:inline text-slate-300 ">|</span>
                        <a href="https://linkedin.com/in/ambalavananm/" className="hover:text-primary transition-colors flex items-center gap-2"><i className="fa-brands fa-linkedin"></i> linkedin.com/in/ambalavananm/</a>
                    </div>
                </header>

                {/* Summary */}
                <section className="mb-10">
                    <h2 className="text-lg font-bold uppercase tracking-widest text-slate-800  border-b border-slate-200  pb-2 mb-4 flex items-center gap-3">
                        <i className="fa-solid fa-user-tie text-primary"></i> Professional Summary
                    </h2>
                    <p className="text-slate-600  leading-relaxed text-justify">
                        Motivated Developer with a solid grasp of Java, Python, C++, and Web Technologies. Passionate about solving algorithmic problems and building efficient, scalable, and useful applications. Experienced in full-stack development, with projects ranging from crisis management dashboards to secure blockchain applications.
                    </p>
                </section>

                {/* Technical Skills */}
                <section className="mb-10">
                    <h2 className="text-lg font-bold uppercase tracking-widest text-slate-800  border-b border-slate-200  pb-2 mb-4 flex items-center gap-3">
                        <i className="fa-solid fa-code text-primary"></i> Technical Skills
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-8 text-slate-600 ">
                        <div className="md:col-span-1 font-semibold text-slate-800 ">Programming Languages:</div>
                        <div className="md:col-span-2">Java, Python, C++, C, Solidity</div>

                        <div className="md:col-span-1 font-semibold text-slate-800 ">Web Technologies:</div>
                        <div className="md:col-span-2">HTML, CSS, JavaScript, React, PHP</div>

                        <div className="md:col-span-1 font-semibold text-slate-800 ">Core Concepts:</div>
                        <div className="md:col-span-2">Data Structures & Algorithms (DSA), DBMS, SQL, OOP, Linear Regression</div>

                        <div className="md:col-span-1 font-semibold text-slate-800 ">Tools & Platforms:</div>
                        <div className="md:col-span-2">Git, GitHub, AWS S3, AWS Sagemaker, AWS Lambda, AWS API Gateway, AWS CloudFront</div>
                    </div>
                </section>

                {/* Projects */}
                <section className="mb-10">
                    <h2 className="text-lg font-bold uppercase tracking-widest text-slate-800  border-b border-slate-200  pb-2 mb-6 flex items-center gap-3">
                        <i className="fa-solid fa-briefcase text-primary"></i> Projects
                    </h2>

                    <div className="space-y-6">
                        <div>
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                                <h3 className="font-bold text-slate-800  text-lg">Crisis Response Management Command Center</h3>
                                <span className="text-sm font-medium px-3 py-1 bg-slate-100  text-primary rounded-full mt-2 sm:mt-0">HTML, CSS, JavaScript</span>
                            </div>
                            <p className="text-slate-600  text-sm">A comprehensive system designed to coordinate resources and communication efficiently during emergency crises.</p>
                        </div>

                        <div>
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                                <h3 className="font-bold text-slate-800  text-lg">SKE Textiles Inventory Platform</h3>
                                <span className="text-sm font-medium px-3 py-1 bg-slate-100  text-primary rounded-full mt-2 sm:mt-0">React, JavaScript, CSS</span>
                            </div>
                            <p className="text-slate-600  text-sm">An inventory and sales management platform tailored specifically for optimizing textile manufacturing business operations.</p>
                        </div>

                        <div>
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                                <h3 className="font-bold text-slate-800  text-lg">E-Voting Using Blockchain</h3>
                                <span className="text-sm font-medium px-3 py-1 bg-slate-100  text-primary rounded-full mt-2 sm:mt-0">Solidity, Blockchain</span>
                            </div>
                            <p className="text-slate-600  text-sm">A secure and transparent voting application leveraging blockchain smart contracts to prevent fraud, ensuring tamper-proof elections.</p>
                        </div>

                        <div>
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                                <h3 className="font-bold text-slate-800  text-lg">Online Quiz Management System</h3>
                                <span className="text-sm font-medium px-3 py-1 bg-slate-100  text-primary rounded-full mt-2 sm:mt-0">PHP, JSON</span>
                            </div>
                            <p className="text-slate-600  text-sm">An interactive quiz platform for educational institutions featuring real-time scoring, question management, and performance reporting.</p>
                        </div>
                    </div>
                </section>

                {/* Education */}
                <section>
                    <h2 className="text-lg font-bold uppercase tracking-widest text-slate-800  border-b border-slate-200  pb-2 mb-4 flex items-center gap-3">
                        <i className="fa-solid fa-graduation-cap text-primary"></i> Education
                    </h2>
                    <div>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                            <h3 className="font-bold text-slate-800  text-lg">BSc Computer Science</h3>
                            <span className="text-sm text-slate-500  italic">Expected Graduation: 2027</span>
                        </div>
                        <p className="text-slate-600  font-medium">VIT University Vellore</p>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default ResumeViewer;
