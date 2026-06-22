import React, { useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './portafolio.css';
import { db } from '../data/portafolioData'
import { db2 } from '../data/portafolioData2'
import CardPortafolio from './cardPortafolio';
const Portafolio = () => {

    const [data] = useState(db)
    const [data2] = useState(db2)

    return (
        <>
            <Container className='pt-5'>
                <header id='projects'>
                    <h2 className='h2Center'>Portafolio</h2>
                </header>

                <Tabs
                    defaultActiveKey="react"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="home" title="html, css, js y bs">
                        <Row>
                            {
                                data.map((item) => (
                                    <CardPortafolio
                                        key={item.id}
                                        item={item}
                                    />
                                ))
                            }
                        </Row>
                    </Tab>
                    <Tab eventKey="react" title="react">
                        <Row>
                            {
                                data2.map((item) => (
                                    <CardPortafolio
                                        key={item.id}
                                        item={item}
                                    />
                                ))
                            }
                        </Row>
                    </Tab>
                </Tabs>
            </Container>
        </>
    )
}

export default Portafolio