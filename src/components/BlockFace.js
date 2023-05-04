// Styles
import '../styles/components/block-face.scss';

export const BlockFace = (block) => {

    return (
        <div className={"block-face " + block.block.color}>
            {block.block.position}
        </div >
    );
}
