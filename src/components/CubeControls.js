import { useContext } from 'react';
import { Row, Col, Button, ButtonGroup } from 'react-bootstrap';

// SCSS
import '../styles/components/cube-controls.scss';

// Context
import { RubiksCubeContext, RubiksCubeReducerActions } from '../hooks/RubicsCubeContextProvider';

// Constants
import { faceRotateDirections } from '../constants/faceRotateDirections';
import { cubeRotateDirections } from '../constants/cubeRotateDirections';

export const CubeControls = () => {
    let rubiksCubeContext = useContext(RubiksCubeContext);

    const rotateCubeClick = (direction) => {
        switch (direction) {
            case cubeRotateDirections.up:
                rubiksCubeContext.dispatch({ type: RubiksCubeReducerActions.setXAngle, payload: (rubiksCubeContext.state.xAngle + 90) })
                break;
            case cubeRotateDirections.down:
                rubiksCubeContext.dispatch({ type: RubiksCubeReducerActions.setXAngle, payload: (rubiksCubeContext.state.xAngle - 90) });
                break;
            case cubeRotateDirections.left:
                rubiksCubeContext.dispatch({ type: RubiksCubeReducerActions.setYAngle, payload: (rubiksCubeContext.state.yAngle - 90) });
                break;
            case cubeRotateDirections.right:
                rubiksCubeContext.dispatch({ type: RubiksCubeReducerActions.setYAngle, payload: (rubiksCubeContext.state.yAngle + 90) });
                break;
            default:
                break;
        }
    }

    return (<>
        {rubiksCubeContext.state.faces &&
            <div className='cube-controls'>
                <h5>Rotate Faces</h5>
                <Row>
                    <Col xs={10}>
                        <ButtonGroup>
                            {rubiksCubeContext.state.faces.map((f, index) => (
                                <Button key={'clockwise_' + index} className={'key-' + f.face.faceType} onClick={() => {
                                    rubiksCubeContext.dispatch({ type: RubiksCubeReducerActions.setRotateFace, payload: { face: f.face.faceType, direction: faceRotateDirections.clockwise } })
                                }}>{f.face.faceType}</Button>
                            ))}
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row>
                    <Col xs={10}>
                        <ButtonGroup>
                            {rubiksCubeContext.state.faces.map((f, index) => (
                                <Button key={'anti_clockwise_' + index} className={'key-' + f.face.faceType} onClick={() => {
                                    rubiksCubeContext.dispatch({ type: RubiksCubeReducerActions.setRotateFace, payload: { face: f.face.faceType, direction: faceRotateDirections.antiClockwise } })
                                }}>{f.face.faceType}'</Button>
                            ))}
                        </ButtonGroup>
                    </Col>
                </Row>
                <h5>Rotate Cube</h5>
                <Row>
                    <Col xs={10}>
                        <ButtonGroup>
                            <Button key='turn_up' onClick={() => rotateCubeClick(cubeRotateDirections.up)}>{cubeRotateDirections.up}</Button>
                            <Button key='turn_down' onClick={() => rotateCubeClick(cubeRotateDirections.down)}>{cubeRotateDirections.down}</Button>
                            <Button key='turn_left' onClick={() => rotateCubeClick(cubeRotateDirections.left)}>{cubeRotateDirections.left}</Button>
                            <Button key='turn_right' onClick={() => rotateCubeClick(cubeRotateDirections.right)}>{cubeRotateDirections.right}</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
            </div>
        }
    </>)
}