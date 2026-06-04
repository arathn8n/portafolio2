import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './section.css'
function Section() {
    return (
        <Container>
            <Row className='pt-5'>
                <Col xs={12} md={6}>
                    <Image className='img' src="https://tse1.mm.bing.net/th/id/OIP.Yi15OHbNuNeCwt9cdKmJ5AHaGY?rs=1&pid=ImgDetMain&o=7&rm=3" fluid />
                </Col>
                <Col xs={12} md={6}>
                    <h1 className='text-center'>Descripción</h1>
                    <p>Soy desarrollador web Frontend con experiencia en la creación de interfaces modernas, responsivas y centradas en la experiencia del usuario utilizando tecnologías como HTML, CSS, Bootstrap y React. Me especializo en transformar diseños en aplicaciones web funcionales, optimizadas y adaptables a diferentes dispositivos, aplicando buenas prácticas de desarrollo y manteniendo un enfoque en la calidad del código. Actualmente, continúo ampliando mis conocimientos para convertirme en desarrollador Full Stack con el stack PERN (PostgreSQL, Express.js, React y Node.js), fortaleciendo mis habilidades tanto en el desarrollo del lado del cliente como en la construcción de APIs, bases de datos y arquitecturas backend escalables, con el objetivo de participar en proyectos web completos de principio a fin.</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Section;