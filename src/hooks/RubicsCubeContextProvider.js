import React, { createContext, useEffect, useReducer } from 'react';

// Constants
import { faces } from '../constants/faces';
import { displayModes } from '../constants/displayModes';
import { FaceModel } from '../models/faceModel';
import { BlockFaceModel } from '../models/blockFaceModel';

let initialState = {
    rotateFace: null,
    xAngle: -20,
    yAngle: 55,
    blocksPerFace: 9,
    faces: [],
    displayMode: displayModes.cube
}

export const RubiksCubeReducerActions = {
    setRotateFace: 'setRotateFace',
    setXAngle: 'setXAngle',
    setYAngle: 'setYAngle',
    setFaces: 'setFaces',
    setUpdateFace: 'setUpdateFace',
    setDisplayMode: 'setDisplayMode'
}

export const RubiksCubeContext = createContext(initialState);

function reducer(state, action) {
    switch (action.type) {
        case RubiksCubeReducerActions.setRotateFace:
            return {
                ...state,
                rotateFace: action.payload
            }
        case RubiksCubeReducerActions.setXAngle:
            return {
                ...state,
                xAngle: action.payload
            }
        case RubiksCubeReducerActions.setYAngle:
            return {
                ...state,
                yAngle: action.payload
            }
        case RubiksCubeReducerActions.setFaces:
            return {
                ...state,
                faces: action.payload
            }
        case RubiksCubeReducerActions.setUpdateFace:
            for (var i = 0; i < state.faces.length; i++) {
                if (state.faces[i].face.faceType === action.payload.face.faceType)
                    state.faces[i].blockFaces = action.payload.blockFaces;
            }
            return {
                ...state
            }
        case RubiksCubeReducerActions.setDisplayMode:
            if (action.payload === displayModes.unfolded) {
                state.xAngle = 0;
                state.yAngle = 58;
            }
            else {
                state.xAngle = -20;
                state.yAngle = 55;
            }

            return {
                ...state,
                displayMode: action.payload
            }
        default:
            return state;
    }
}

const RubiksCubeContextProvider = ({ children }) => {
    let [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        // Sets up initial state of all Faces
        let facesArr = [];

        for (var i = 0; i < faces.length; i++) {
            let face = faces[i];
            let faceObj = new FaceModel(face, []);

            for (var b = 0; b < state.blocksPerFace; b++) {
                faceObj.blockFaces.push(new BlockFaceModel(b, face.color));
            }

            facesArr.push(faceObj);
        }

        dispatch({ type: RubiksCubeReducerActions.setFaces, payload: facesArr });
    }, [state.blocksPerFace]);

    return (
        <RubiksCubeContext.Provider value={{
            state,
            dispatch,
        }}>
            {children}
        </RubiksCubeContext.Provider>
    );
}

export default RubiksCubeContextProvider;