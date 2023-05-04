// Styles
import '../styles/components/cube-face.scss';

// Components
import { BlockFace } from './BlockFace';

// Constants
import { displayModes } from '../constants/displayModes';

export const CubeFace = ({ face, displayMode }) => {
    return (
        <div className={'cube-face ' + face.face.faceType + (displayMode === displayModes.unfolded ? ' unfolded' : '')}>
            {face.blockFaces.map(faceBlock => (
                <BlockFace key={"faceblock_" + faceBlock.position} block={faceBlock} />
            ))}
        </div>
    )
}