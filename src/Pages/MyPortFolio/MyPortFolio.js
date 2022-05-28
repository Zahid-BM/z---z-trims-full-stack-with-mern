import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import PageTitle from '../Shared/PageTitle/PageTitle';
import image from '../../images/Passport size below 200kb.jpeg';
import skills from '../../images/skills.png';
import target from '../../images/target.png';
import website from '../../images/website-development.png';

const MyPortFolio = () => {
    return (
        <>
            <PageTitle title={'Portfolio'} pageColor={'portfolio-bg'}></PageTitle>
            <Container className='my-5'>
                <Row>
                    <Col className='my-auto p-4' lg={6}>
                        <h1 className='fw-bolder display-3 '><span className='text-success'>Hello ! This is BM</span> <span className='text-warning'>Zahidul Islam</span></h1>
                        <br />
                        <h6><span className='text-success'>Email Address</span> : bmzahidulislam@outlook.com</h6>
                        <h6><span className='text-success'>Profession</span> : Programmer (Course on going...)</h6>
                        <h6><span className='text-success'>Job Experience</span>: H&M Merchandiser at Ananta Apparels Limited, Supply Chain Management Officer at Ananta Apparels Limited, Trainee Supply Chain Management Officer at Ananta Apparels Limited.</h6>
                        <h6><span className='text-success'>Academic Background</span> : Bachelor and Masters in English. National University, Bangladesh.</h6>
                        <h6><span className='text-success'>Location</span> : Dhaka, Bangladesh.</h6>
                        <h4 className='text-center mt-5 text-success'><img src={skills} alt="" /> List of my Major skills</h4>

                        <ul className="list-group list-group-flush  ">
                            <li className="list-group-item mb-3 "><b className='text-warning'>Reactjs :</b> I have an advanced level skills on Reactjs with numerous projects. .</li>
                            <li className="list-group-item mb-3 "><b className='text-warning'>Expressjs :</b> I have an intermediate level skills on Expressjs with many projects.</li>
                            <li className="list-group-item mb-3 "><b className='text-warning'>Authentication (Firebase) :</b> I have an intermediate level skill on Firebase Authentication with many projects.</li>
                            <li className="list-group-item mb-3 "><b className='text-warning'>Database (Mongodb) :</b> I have an intermediate level skill on Database (Mongodb) with many projects.</li>
                            <li className="list-group-item mb-3 "><b className='text-warning'>Nodejs :</b> I have an intermediate level skill on Nodejs with many projects.</li>
                            <li className="list-group-item mb-3 "><b className='text-warning'>Data Authorization (JWT):</b> I have an intermediate level skill on Data Authorization with Json Web Token(JWT) with many projects.</li>
                            <li className="list-group-item mb-3 "><b className='text-warning'>CSS Frameworks (Bootstrap & Tailwindcsss):</b> I have an expert level skill on CSS Frameworks (Bootstrap & Tailwindcsss) with many projects.</li>

                        </ul>

                        <div className='my-4'>
                            <h4 className='text-success'>Three Website links  created by me <img src={website} alt="" /></h4>
                            <ul className="list-group list-group-flush  ">
                                <li className="list-group-item mb-3 "><a href="https://fruits-warehouse-f1061.web.app/" target="_blank" rel="noreferrer">
                                    <Button className='text-decoration-none text-warning fw-bold' variant='link'>Website : 1</Button>
                                </a></li>
                                <li className="list-group-item mb-3 "><a href="https://alem-life-coach.web.app/home" target="_blank" rel="noreferrer">
                                    <Button className='text-decoration-none text-warning fw-bold' variant='link'>Website : 2</Button>
                                </a></li>
                                <li className="list-group-item mb-3 "><a href="https://assignment-09-react-router.netlify.app/" target="_blank" rel="noreferrer">
                                    <Button className='text-decoration-none text-warning fw-bold' variant='link'>Website : 3</Button>
                                </a></li>
                            </ul>
                        </div>
                        <br />
                        <br />
                        <h2 className='text-success'>Career Goal <img src={target} alt="" /></h2>
                        <p className='text-secondary'>Currently I am having my programming course from Programming Hero on Full Stack Web Development. After having completed this course I will try for job and later on after having some experiences and enriching my programming skills I have a plan to start a business of my own.</p>
                    </Col>
                    <Col lg={6}>
                        <img className='w-100 rounded' src={image} alt="" />
                    </Col>
                </Row>
            </Container>

        </>
    );
};

export default MyPortFolio;