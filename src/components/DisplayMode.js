import { useContext } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import { RubiksCubeContext, RubiksCubeReducerActions } from "../hooks/RubicsCubeContextProvider"

export const DisplayMode = () => {
    let rubiksCubeContext = useContext(RubiksCubeContext);

    const displayModes = [
        { name: 'Cube', value: 0 },
        { name: 'Unfolded', value: 1 }
    ];

    return (<>
        <ButtonGroup>
            {displayModes.map((mode, index) => (
                <ToggleButton
                    key={index}
                    id={`displayMode-${index}`}
                    type="radio"
                    name="radio"
                    style={{ color: '#000', fontWeight: 'bold' }}
                    value={mode.value}
                    checked={rubiksCubeContext.state.displayMode === mode.value}
                    onChange={(e) => {
                        rubiksCubeContext.dispatch({ type: RubiksCubeReducerActions.setDisplayMode, payload: mode.value });
                    }}
                >
                    {mode.name}
                </ToggleButton>
            ))}
        </ButtonGroup>
    </>)
}