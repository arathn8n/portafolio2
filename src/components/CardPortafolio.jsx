import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
const CardPortafolio = ({ item }) => {

    const { name, image, info, url } = item

    return (
        <>

            <Col xs={12} md={6}>
                <a href={url}>
                    <figure>
                        <Image src={image} alt={name} fluid />
                        <figcaption>
                            <p>{info}</p>
                        </figcaption>
                    </figure>
                </a>
            </Col>


        </>
    )
}

export default CardPortafolio