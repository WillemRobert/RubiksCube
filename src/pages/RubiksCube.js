import { Col, Row } from 'react-bootstrap';

// Components
import { Cube } from '../components/Cube';
import { CubeControls } from '../components/CubeControls';

// Context
import RubiksCubeContextProvider from '../hooks/RubicsCubeContextProvider';

// Styles
import '../styles/pages/rubiks-cube.scss';
import { DisplayMode } from '../components/DisplayMode';

export const RubiksCube = () => {
    return (
        <RubiksCubeContextProvider>
            <Row>
                <Col>
                    <DisplayMode />
                </Col>
            </Row>
            <Row className='mt-3'>
                <Col>
                    <Cube />
                </Col>
            </Row>
            <Row>
                <Col>
                    <CubeControls />
                </Col>
            </Row>
        </RubiksCubeContextProvider>
    )
}