import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useTrims from '../../hooks/useTrims';
import Loading from '../Shared/Loading/Loading';
import SingleTrims from './SingleTrims';
import list from '../../images/list.png';

const Trims = () => {
    const [trims] = useTrims();
    return (
        <>
            <Container className='my-5'>
                <h1 className='text-center text-success fw-bold display-md-3'>Trims <img src={list} alt="" /></h1>
                <h6 className='text-center text-warning'>We have been manufacturing and serving the Denim Markets successfully</h6>
                {trims.length ? <Row>
                    {
                        trims.map(singleTRims => <SingleTrims
                            key={singleTRims._id}
                            singleTRims={singleTRims}
                        ></SingleTrims>)
                    }
                </Row> : <Loading></Loading>
                }
            </Container>

        </>
    );
};

export default Trims;