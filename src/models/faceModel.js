export class FaceModel {
    face = null;
    blockFaces = []

    constructor(face, blockFaces) {
        this.face = face;
        this.blockFaces = blockFaces;
    }
}