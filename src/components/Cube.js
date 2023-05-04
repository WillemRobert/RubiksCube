import { useContext, useEffect, useState } from 'react';

// Styles
import '../styles/components/cube.scss';

// Context
import { RubiksCubeContext, RubiksCubeReducerActions } from '../hooks/RubicsCubeContextProvider';
import { CubeFace } from './CubeFace';

// Constants
import { faceRotateDirections } from '../constants/faceRotateDirections';
import { facesEnum } from '../constants/faces';

// Utils
import { rotateBackAdjacentFaces, rotateDownAdjacentFaces, rotateFrontAdjacentFaces, rotateLeftAdjacentFaces, rotateRightAdjacentFaces, rotateUpAdjacentFaces } from '../utils/utils';

export const Cube = () => {
    const rubiksCubeContext = useContext(RubiksCubeContext);
    const [cubeTranslation, setCubeTranslation] = useState(0);

    useEffect(() => {
        // Rotate the whole cube
        let translation = "rotateX(" + rubiksCubeContext.state.xAngle + "deg) rotateY(" + rubiksCubeContext.state.yAngle + "deg) translateX(-100px) translateY(-100px)";
        setCubeTranslation(translation);
    }, [rubiksCubeContext.state.xAngle, rubiksCubeContext.state.yAngle]);

    const rotateFace = (face, direction) => {
        // Rotate a specific face on the Cube
        let allFaces = [...rubiksCubeContext.state.faces];
        let updatedFaces = [];

        // Update the face being rotated
        let updatedFace = { ...face };
        let updatedBlockFaces = face.blockFaces.map(blockFace => {
            return {
                ...blockFace,
                position: blockFace.position,
                color: blockFace.color
            }
        });

        for (var i = 0; i < face.blockFaces.length; i++) {
            let fromBlock = { ...face.blockFaces[i] };

            let toIndex = 0;

            switch (i) {
                case 0:
                    if (direction === faceRotateDirections.clockwise)
                        toIndex = 2;
                    else
                        toIndex = 6;
                    break;
                case 1:
                    if (direction === faceRotateDirections.clockwise)
                        toIndex = 5;
                    else
                        toIndex = 3;
                    break;
                case 2:
                    if (direction === faceRotateDirections.clockwise)
                        toIndex = 8;
                    else
                        toIndex = 0;
                    break;
                case 3:
                    if (direction === faceRotateDirections.clockwise)
                        toIndex = 1;
                    else
                        toIndex = 7;
                    break;
                case 4:
                    toIndex = i;
                    break;
                case 5:
                    if (direction === faceRotateDirections.clockwise)
                        toIndex = 7;
                    else
                        toIndex = 1
                    break;
                case 6:
                    if (direction === faceRotateDirections.clockwise)
                        toIndex = 0;
                    else
                        toIndex = 8;
                    break;
                case 7:
                    if (direction === faceRotateDirections.clockwise)
                        toIndex = 3;
                    else
                        toIndex = 5;
                    break;
                case 8:
                    if (direction === faceRotateDirections.clockwise)
                        toIndex = 6;
                    else
                        toIndex = 2;
                    break;
                default:
                    break;
            }
            updatedBlockFaces[toIndex].color = fromBlock.color;
        }
        updatedFace.blockFaces = updatedBlockFaces;
        updatedFaces.push(updatedFace);

        // Update all the other adjacent faces
        // I would have liked to develope a more abstract data model so that I did not have to do so many manual moves of the block faces.
        // If I had more time I would have considered a multidimentional array or to use Matrix transformations and perhaps using OpenGL for rendering
        switch (updatedFace.face.faceType) {
            case facesEnum.front:
                rotateFrontAdjacentFaces(updatedFaces, direction, rubiksCubeContext.state.faces);
                break;
            case facesEnum.right:
                rotateRightAdjacentFaces(updatedFaces, direction, rubiksCubeContext.state.faces);
                break;
            case facesEnum.left:
                rotateLeftAdjacentFaces(updatedFaces, direction, rubiksCubeContext.state.faces);
                break;
            case facesEnum.back:
                rotateBackAdjacentFaces(updatedFaces, direction, rubiksCubeContext.state.faces);
                break;
            case facesEnum.up:
                rotateUpAdjacentFaces(updatedFaces, direction, rubiksCubeContext.state.faces);
                break;
            case facesEnum.down:
                rotateDownAdjacentFaces(updatedFaces, direction, rubiksCubeContext.state.faces);
                break;
            default:
                break;
        }

        // Override all the updated faces and update Context
        updatedFaces.forEach(updatedFaceObj => {
            let faceIndex = allFaces.findIndex(x => x.face.faceType === updatedFaceObj.face.faceType)

            if (faceIndex > -1)
                allFaces[faceIndex] = updatedFaceObj;
        });
        rubiksCubeContext.dispatch({ type: RubiksCubeReducerActions.setFaces, payload: allFaces });
    }

    useEffect(() => {
        if (rubiksCubeContext.state.rotateFace) {
            let face = rubiksCubeContext.state.faces.find(x => x.face.faceType === rubiksCubeContext.state.rotateFace.face);

            if (!face) return;

            rotateFace(face, rubiksCubeContext.state.rotateFace.direction);
        }
    }, [rubiksCubeContext.state.rotateFace]);

    return (
        <div className="cube-wrapper">
            <div className="cube" style={{ WebkitTransform: cubeTranslation }}>
                {rubiksCubeContext.state.faces.map(item => <CubeFace key={item.face.faceType} face={item} displayMode={rubiksCubeContext.state.displayMode} />)}
            </div>
        </div >
    )
}