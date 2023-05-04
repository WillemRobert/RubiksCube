import { faceRotateDirections } from "../constants/faceRotateDirections";
import { facesEnum } from "../constants/faces";

export const rotateFrontAdjacentFaces = (updatedFaces, direction, allFaces) => {
    const upFace = allFaces.find(x => x.face.faceType === facesEnum.up);
    const downFace = allFaces.find(x => x.face.faceType === facesEnum.down);
    const leftFace = allFaces.find(x => x.face.faceType === facesEnum.left);
    const rightFace = allFaces.find(x => x.face.faceType === facesEnum.right);

    // Get the blocks that need to be rotated on the adjacent faces
    let upBlockFaces = upFace.blockFaces.filter(x => x.position === 0 || x.position === 3 || x.position === 6).map(blockFace => {
        return {
            ...blockFace,
            position: blockFace.position,
            color: blockFace.color
        }
    });

    let rightBlockFaces = rightFace.blockFaces.filter(x => x.position === 0 || x.position === 3 || x.position === 6).map(blockFace => {
        return {
            ...blockFace,
            position: blockFace.position,
            color: blockFace.color
        }
    });

    let leftBlockFaces = leftFace.blockFaces.filter(x => x.position === 2 || x.position === 5 || x.position === 8).map(blockFace => {
        return {
            ...blockFace,
            position: blockFace.position,
            color: blockFace.color
        }
    });

    let downBlockFaces = downFace.blockFaces.filter(x => x.position === 2 || x.position === 5 || x.position === 8).map(blockFace => {
        return {
            ...blockFace,
            position: blockFace.position,
            color: blockFace.color
        }
    });

    // Update Right Face
    let updatedFace = { ...rightFace };
    let updatedBlockFaces = updatedFace.blockFaces.map(blockFace => {
        return {
            ...blockFace,
            position: blockFace.position,
            color: blockFace.color
        }
    });

    if (direction === faceRotateDirections.clockwise) {
        upBlockFaces.forEach(upBlockFace => {
            updatedBlockFaces.forEach(rightBlockFace => {
                if (upBlockFace.position === rightBlockFace.position)
                    rightBlockFace.color = upBlockFace.color;
            });
        });
    } else {
        downBlockFaces.forEach(downBlockFace => {
            updatedBlockFaces.forEach(updatedBlockFace => {
                if (downBlockFace.position === 8 && updatedBlockFace.position === 0)
                    updatedBlockFace.color = downBlockFace.color;
                else if (downBlockFace.position === 5 && updatedBlockFace.position === 3)
                    updatedBlockFace.color = downBlockFace.color;
                else if (downBlockFace.position === 2 && updatedBlockFace.position === 6)
                    updatedBlockFace.color = downBlockFace.color;
            });
        });
    }

    updatedFace.blockFaces = updatedBlockFaces;
    updatedFaces.push(updatedFace);

    // Update Top Face
    updatedFace = { ...upFace };
    updatedBlockFaces = updatedFace.blockFaces.map(blockFace => {
        return {
            ...blockFace,
            position: blockFace.position,
            color: blockFace.color
        }
    });

    if (direction === faceRotateDirections.clockwise) {
        leftBlockFaces.forEach(leftBlockFace => {
            updatedBlockFaces.forEach(updatedBlockFace => {
                if (leftBlockFace.position === 2 && updatedBlockFace.position === 6)
                    updatedBlockFace.color = leftBlockFace.color;
                else if (leftBlockFace.position === 5 && updatedBlockFace.position === 3)
                    updatedBlockFace.color = leftBlockFace.color;
                else if (leftBlockFace.position === 8 && updatedBlockFace.position === 0)
                    updatedBlockFace.color = leftBlockFace.color;
            });
        });
    } else {
        rightBlockFaces.forEach(rightBlockFace => {
            updatedBlockFaces.forEach(updatedBlockFace => {
                if (rightBlockFace.position === updatedBlockFace.position)
                    updatedBlockFace.color = rightBlockFace.color;
            });
        });
    }

    updatedFace.blockFaces = updatedBlockFaces;
    updatedFaces.push(updatedFace);

    // Update left Face
    updatedFace = { ...leftFace };
    updatedBlockFaces = updatedFace.blockFaces.map(blockFace => {
        return {
            ...blockFace,
            position: blockFace.position,
            color: blockFace.color
        }
    });

    if (direction === faceRotateDirections.clockwise) {
        downBlockFaces.forEach(downBlockFace => {
            updatedBlockFaces.forEach(updatedBlockFace => {
                if (downBlockFace.position === updatedBlockFace.position) {
                    updatedBlockFace.color = downBlockFace.color;
                }
            });
        });
    } else {
        upBlockFaces.forEach(upBlockFace => {
            updatedBlockFaces.forEach(updatedBlockFace => {
                if (upBlockFace.position === 0 && updatedBlockFace.position === 8)
                    updatedBlockFace.color = upBlockFace.color;
                else if (upBlockFace.position === 3 && updatedBlockFace.position === 5)
                    updatedBlockFace.color = upBlockFace.color;
                else if (upBlockFace.position === 6 && updatedBlockFace.position === 2)
                    updatedBlockFace.color = upBlockFace.color;
            });
        });
    }

    updatedFace.blockFaces = updatedBlockFaces;
    updatedFaces.push(updatedFace);

    // Update Bottom Face
    updatedFace = { ...downFace };
    updatedBlockFaces = updatedFace.blockFaces.map(blockFace => {
        return {
            ...blockFace,
            position: blockFace.position,
            color: blockFace.color
        }
    });

    if (direction === faceRotateDirections.clockwise) {
        rightBlockFaces.forEach(rightBlockFace => {
            updatedBlockFaces.forEach(updatedBlockFace => {
                if (rightBlockFace.position === 0 && updatedBlockFace.position === 8)
                    updatedBlockFace.color = rightBlockFace.color;
                else if (rightBlockFace.position === 3 && updatedBlockFace.position === 5)
                    updatedBlockFace.color = rightBlockFace.color;
                else if (rightBlockFace.position === 6 && updatedBlockFace.position === 2)
                    updatedBlockFace.color = rightBlockFace.color;
            });
        });
    } else {
        leftBlockFaces.forEach(leftBlockFace => {
            updatedBlockFaces.forEach(updatedBlockFace => {
                if (leftBlockFace.position === updatedBlockFace.position)
                    updatedBlockFace.color = leftBlockFace.color;
            });
        });
    }

    updatedFace.blockFaces = updatedBlockFaces;
    updatedFaces.push(updatedFace);
}

export const rotateRightAdjacentFaces = (updatedFaces, direction, allFaces) => {
    const upFace = allFaces.find(x => x.face.faceType === facesEnum.up);
    const downFace = allFaces.find(x => x.face.faceType === facesEnum.down);
    const leftFace = allFaces.find(x => x.face.faceType === facesEnum.front);
    const rightFace = allFaces.find(x => x.face.faceType === facesEnum.back);

    // Get the blocks that need to be rotated on the adjacent faces
    let upBlockFaces = upFace.blockFaces.filter(x => x.position === 6 || x.position === 7 || x.position === 8).map(blockFace => {
        return {
            ...blockFace,
            position: blockFace.position,
            color: blockFace.color
        }
    });

    let rightBlockFaces = rightFace.blockFaces.filter(x => x.position === 0 || x.position === 3 || x.position === 6).map(blockFace => {
        return {
            ...blockFace,
            position: blockFace.position,
            color: blockFace.color
        }
    });

    let leftBlockFaces = leftFace.blockFaces.filter(x => x.position === 2 || x.position === 5 || x.position === 8).map(blockFace => {
        return {
            ...blockFace,
            position: blockFace.position,
            color: blockFace.color
        }
    });

    let downBlockFaces = downFace.blockFaces.filter(x => x.position === 6 || x.position === 7 || x.position === 8).map(blockFace => {
        return {
            ...blockFace,
            position: blockFace.position,
            color: blockFace.color
        }
    });

    // Update Right Face
    let updatedFace = { ...rightFace };
    let updatedBlockFaces = updatedFace.blockFaces.map(blockFace => {
        return {
            ...blockFace,
            position: blockFace.position,
            color: blockFace.color
        }
    });

    if (direction === faceRotateDirections.clockwise) {
        upBlockFaces.forEach(upBlockFace => {
            updatedBlockFaces.forEach(rightBlockFace => {
                if (upBlockFace.position === 6 && rightBlockFace.position === 0)
                    rightBlockFace.color = upBlockFace.color;
                else if (upBlockFace.position === 7 && rightBlockFace.position === 3)
                    rightBlockFace.color = upBlockFace.color;
                else if (upBlockFace.position === 8 && rightBlockFace.position === 6)
                    rightBlockFace.color = upBlockFace.color;
            });
        });
    } else {
        downBlockFaces.forEach(downBlockFace => {
            updatedBlockFaces.forEach(updatedBlockFace => {
                if (downBlockFace.position === 6 && updatedBlockFace.position === 0)
                    updatedBlockFace.color = downBlockFace.color;
                else if (downBlockFace.position === 7 && updatedBlockFace.position === 3)
                    updatedBlockFace.color = downBlockFace.color;
                else if (downBlockFace.position === 8 && updatedBlockFace.position === 6)
                    updatedBlockFace.color = downBlockFace.color;
            });
        });
    }

    updatedFace.blockFaces = updatedBlockFaces;
    updatedFaces.push(updatedFace);

    // Update Top Face
    updatedFace = { ...upFace };
    updatedBlockFaces = updatedFace.blockFaces.map(blockFace => {
        return {
            ...blockFace,
            position: blockFace.position,
            color: blockFace.color
        }
    });

    if (direction === faceRotateDirections.clockwise) {
        leftBlockFaces.forEach(leftBlockFace => {
            updatedBlockFaces.forEach(updatedBlockFace => {
                if (leftBlockFace.position === 2 && updatedBlockFace.position === 8)
                    updatedBlockFace.color = leftBlockFace.color;
                else if (leftBlockFace.position === 5 && updatedBlockFace.position === 7)
                    updatedBlockFace.color = leftBlockFace.color;
                else if (leftBlockFace.position === 8 && updatedBlockFace.position === 6)
                    updatedBlockFace.color = leftBlockFace.color;
            });
        });
    } else {
        rightBlockFaces.forEach(rightBlockFace => {
            updatedBlockFaces.forEach(updatedBlockFace => {
                if (rightBlockFace.position === 0 && updatedBlockFace.position === 6)
                    updatedBlockFace.color = rightBlockFace.color;
                else if (rightBlockFace.position === 3 && updatedBlockFace.position === 7)
                    updatedBlockFace.color = rightBlockFace.color;
                else if (rightBlockFace.position === 6 && updatedBlockFace.position === 8)
                    updatedBlockFace.color = rightBlockFace.color;
            });
        });
    }

    updatedFace.blockFaces = updatedBlockFaces;
    updatedFaces.push(updatedFace);

    // Update left Face
    updatedFace = { ...leftFace };
    updatedBlockFaces = updatedFace.blockFaces.map(blockFace => {
        return {
            ...blockFace,
            position: blockFace.position,
            color: blockFace.color
        }
    });

    if (direction === faceRotateDirections.clockwise) {
        downBlockFaces.forEach(downBlockFace => {
            updatedBlockFaces.forEach(updatedBlockFace => {
                if (downBlockFace.position === 8 && updatedBlockFace.position === 2)
                    updatedBlockFace.color = downBlockFace.color;
                else if (downBlockFace.position === 7 && updatedBlockFace.position === 5)
                    updatedBlockFace.color = downBlockFace.color;
                else if (downBlockFace.position === 6 && updatedBlockFace.position === 8)
                    updatedBlockFace.color = downBlockFace.color;
            });
        });
    } else {
        upBlockFaces.forEach(upBlockFace => {
            updatedBlockFaces.forEach(updatedBlockFace => {
                if (upBlockFace.position === 6 && updatedBlockFace.position === 8)
                    updatedBlockFace.color = upBlockFace.color;
                else if (upBlockFace.position === 7 && updatedBlockFace.position === 5)
                    updatedBlockFace.color = upBlockFace.color;
                else if (upBlockFace.position === 8 && updatedBlockFace.position === 2)
                    updatedBlockFace.color = upBlockFace.color;
            });
        });
    }

    updatedFace.blockFaces = updatedBlockFaces;
    updatedFaces.push(updatedFace);

    // Update Bottom Face
    updatedFace = { ...downFace };
    updatedBlockFaces = updatedFace.blockFaces.map(blockFace => {
        return {
            ...blockFace,
            position: blockFace.position,
            color: blockFace.color
        }
    });

    if (direction === faceRotateDirections.clockwise) {
        rightBlockFaces.forEach(rightBlockFace => {
            updatedBlockFaces.forEach(updatedBlockFace => {
                if (rightBlockFace.position === 0 && updatedBlockFace.position === 6)
                    updatedBlockFace.color = rightBlockFace.color;
                else if (rightBlockFace.position === 3 && updatedBlockFace.position === 7)
                    updatedBlockFace.color = rightBlockFace.color;
                else if (rightBlockFace.position === 6 && updatedBlockFace.position === 8)
                    updatedBlockFace.color = rightBlockFace.color;
            });
        });
    } else {
        leftBlockFaces.forEach(leftBlockFace => {
            updatedBlockFaces.forEach(updatedBlockFace => {
                if (leftBlockFace.position === 2 && updatedBlockFace.position === 8)
                    updatedBlockFace.color = leftBlockFace.color;
                else if (leftBlockFace.position === 5 && updatedBlockFace.position === 7)
                    updatedBlockFace.color = leftBlockFace.color;
                else if (leftBlockFace.position === 8 && updatedBlockFace.position === 6)
                    updatedBlockFace.color = leftBlockFace.color;
            })
        })
    }

    updatedFace.blockFaces = updatedBlockFaces;
    updatedFaces.push(updatedFace);
}

export const rotateLeftAdjacentFaces = (updatedFaces, direction, allFaces) => {
    const upFace = allFaces.find(x => x.face.faceType === facesEnum.up);
    const downFace = allFaces.find(x => x.face.faceType === facesEnum.down);
    const leftFace = allFaces.find(x => x.face.faceType === facesEnum.back);
    const rightFace = allFaces.find(x => x.face.faceType === facesEnum.front);

    // Get the blocks that need to be rotated on the adjacent faces
    let upBlockFaces = upFace.blockFaces.filter(x => x.position === 0 || x.position === 1 || x.position === 2).map(blockFace => {
        return {
            ...blockFace,
            position: blockFace.position,
            color: blockFace.color
        }
    });

    let rightBlockFaces = rightFace.blockFaces.filter(x => x.position === 0 || x.position === 3 || x.position === 6).map(blockFace => {
        return {
            ...blockFace,
            position: blockFace.position,
            color: blockFace.color
        }
    });

    let leftBlockFaces = leftFace.blockFaces.filter(x => x.position === 2 || x.position === 5 || x.position === 8).map(blockFace => {
        return {
            ...blockFace,
            position: blockFace.position,
            color: blockFace.color
        }
    });

    let downBlockFaces = downFace.blockFaces.filter(x => x.position === 0 || x.position === 1 || x.position === 2).map(blockFace => {
        return {
            ...blockFace,
            position: blockFace.position,
            color: blockFace.color
        }
    });

    // Update Right Face
    let updatedFace = { ...rightFace };
    let updatedBlockFaces = updatedFace.blockFaces.map(blockFace => {
        return {
            ...blockFace,
            position: blockFace.position,
            color: blockFace.color
        }
    });

    if (direction === faceRotateDirections.clockwise) {
        upBlockFaces.forEach(upBlockFace => {
            updatedBlockFaces.forEach(rightBlockFace => {
                if (upBlockFace.position === 2 && rightBlockFace.position === 0)
                    rightBlockFace.color = upBlockFace.color;
                else if (upBlockFace.position === 1 && rightBlockFace.position === 3)
                    rightBlockFace.color = upBlockFace.color;
                else if (upBlockFace.position === 0 && rightBlockFace.position === 6)
                    rightBlockFace.color = upBlockFace.color;
            });
        });
    } else {
        downBlockFaces.forEach(downBlockFace => {
            updatedBlockFaces.forEach(updatedBlockFace => {
                if (downBlockFace.position === 2 && updatedBlockFace.position === 0)
                    updatedBlockFace.color = downBlockFace.color;
                else if (downBlockFace.position === 1 && updatedBlockFace.position === 3)
                    updatedBlockFace.color = downBlockFace.color;
                else if (downBlockFace.position === 0 && updatedBlockFace.position === 6)
                    updatedBlockFace.color = downBlockFace.color;
            });
        });
    }

    updatedFace.blockFaces = updatedBlockFaces;
    updatedFaces.push(updatedFace);

    // Update Top Face
    updatedFace = { ...upFace };
    updatedBlockFaces = updatedFace.blockFaces.map(blockFace => {
        return {
            ...blockFace,
            position: blockFace.position,
            color: blockFace.color
        }
    });

    if (direction === faceRotateDirections.clockwise) {
        leftBlockFaces.forEach(leftBlockFace => {
            updatedBlockFaces.forEach(updatedBlockFace => {
                if (leftBlockFace.position === 2 && updatedBlockFace.position === 0)
                    updatedBlockFace.color = leftBlockFace.color;
                else if (leftBlockFace.position === 5 && updatedBlockFace.position === 1)
                    updatedBlockFace.color = leftBlockFace.color;
                else if (leftBlockFace.position === 8 && updatedBlockFace.position === 2)
                    updatedBlockFace.color = leftBlockFace.color;
            });
        });
    } else {
        rightBlockFaces.forEach(rightBlockFace => {
            updatedBlockFaces.forEach(updatedBlockFace => {
                if (rightBlockFace.position === 0 && updatedBlockFace.position === 2)
                    updatedBlockFace.color = rightBlockFace.color;
                else if (rightBlockFace.position === 3 && updatedBlockFace.position === 1)
                    updatedBlockFace.color = rightBlockFace.color;
                else if (rightBlockFace.position === 6 && updatedBlockFace.position === 0)
                    updatedBlockFace.color = rightBlockFace.color;
            });
        });
    }

    updatedFace.blockFaces = updatedBlockFaces;
    updatedFaces.push(updatedFace);

    // Update left Face
    updatedFace = { ...leftFace };
    updatedBlockFaces = updatedFace.blockFaces.map(blockFace => {
        return {
            ...blockFace,
            position: blockFace.position,
            color: blockFace.color
        }
    });

    if (direction === faceRotateDirections.clockwise) {
        downBlockFaces.forEach(downBlockFace => {
            updatedBlockFaces.forEach(updatedBlockFace => {
                if (downBlockFace.position === 0 && updatedBlockFace.position === 2)
                    updatedBlockFace.color = downBlockFace.color;
                else if (downBlockFace.position === 1 && updatedBlockFace.position === 5)
                    updatedBlockFace.color = downBlockFace.color;
                else if (downBlockFace.position === 2 && updatedBlockFace.position === 8)
                    updatedBlockFace.color = downBlockFace.color;
            });
        });
    } else {
        upBlockFaces.forEach(upBlockFace => {
            updatedBlockFaces.forEach(updatedBlockFace => {
                if (upBlockFace.position === 2 && updatedBlockFace.position === 8)
                    updatedBlockFace.color = upBlockFace.color;
                else if (upBlockFace.position === 1 && updatedBlockFace.position === 5)
                    updatedBlockFace.color = upBlockFace.color;
                else if (upBlockFace.position === 0 && updatedBlockFace.position === 2)
                    updatedBlockFace.color = upBlockFace.color;
            });
        });
    }

    updatedFace.blockFaces = updatedBlockFaces;
    updatedFaces.push(updatedFace);

    // Update Bottom Face
    updatedFace = { ...downFace };
    updatedBlockFaces = updatedFace.blockFaces.map(blockFace => {
        return {
            ...blockFace,
            position: blockFace.position,
            color: blockFace.color
        }
    });

    if (direction === faceRotateDirections.clockwise) {
        rightBlockFaces.forEach(rightBlockFace => {
            updatedBlockFaces.forEach(updatedBlockFace => {
                if (rightBlockFace.position === 0 && updatedBlockFace.position === 2)
                    updatedBlockFace.color = rightBlockFace.color;
                else if (rightBlockFace.position === 3 && updatedBlockFace.position === 1)
                    updatedBlockFace.color = rightBlockFace.color;
                else if (rightBlockFace.position === 6 && updatedBlockFace.position === 0)
                    updatedBlockFace.color = rightBlockFace.color;
            });
        });
    } else {
        leftBlockFaces.forEach(leftBlockFace => {
            updatedBlockFaces.forEach(updatedBlockFace => {
                if (leftBlockFace.position === 2 && updatedBlockFace.position === 0)
                    updatedBlockFace.color = leftBlockFace.color;
                else if (leftBlockFace.position === 5 && updatedBlockFace.position === 1)
                    updatedBlockFace.color = leftBlockFace.color;
                else if (leftBlockFace.position === 8 && updatedBlockFace.position === 2)
                    updatedBlockFace.color = leftBlockFace.color;
            });
        });
    }

    updatedFace.blockFaces = updatedBlockFaces;
    updatedFaces.push(updatedFace);
}

export const rotateBackAdjacentFaces = (updatedFaces, direction, allFaces) => {
    const upFace = allFaces.find(x => x.face.faceType === facesEnum.up);
    const downFace = allFaces.find(x => x.face.faceType === facesEnum.down);
    const leftFace = allFaces.find(x => x.face.faceType === facesEnum.right);
    const rightFace = allFaces.find(x => x.face.faceType === facesEnum.left);

    // Get the blocks that need to be rotated on the adjacent faces
    let upBlockFaces = upFace.blockFaces.filter(x => x.position === 2 || x.position === 5 || x.position === 8).map(blockFace => {
        return {
            ...blockFace,
            position: blockFace.position,
            color: blockFace.color
        }
    });

    let rightBlockFaces = rightFace.blockFaces.filter(x => x.position === 0 || x.position === 3 || x.position === 6).map(blockFace => {
        return {
            ...blockFace,
            position: blockFace.position,
            color: blockFace.color
        }
    });

    let leftBlockFaces = leftFace.blockFaces.filter(x => x.position === 2 || x.position === 5 || x.position === 8).map(blockFace => {
        return {
            ...blockFace,
            position: blockFace.position,
            color: blockFace.color
        }
    });

    let downBlockFaces = downFace.blockFaces.filter(x => x.position === 0 || x.position === 3 || x.position === 6).map(blockFace => {
        return {
            ...blockFace,
            position: blockFace.position,
            color: blockFace.color
        }
    });

    // Update Right Face
    let updatedFace = { ...rightFace };
    let updatedBlockFaces = updatedFace.blockFaces.map(blockFace => {
        return {
            ...blockFace,
            position: blockFace.position,
            color: blockFace.color
        }
    });

    if (direction === faceRotateDirections.clockwise) {
        upBlockFaces.forEach(upBlockFace => {
            updatedBlockFaces.forEach(rightBlockFace => {
                if (upBlockFace.position === 8 && rightBlockFace.position === 0)
                    rightBlockFace.color = upBlockFace.color;
                else if (upBlockFace.position === 5 && rightBlockFace.position === 3)
                    rightBlockFace.color = upBlockFace.color;
                if (upBlockFace.position === 2 && rightBlockFace.position === 6)
                    rightBlockFace.color = upBlockFace.color;
            });
        });
    } else {
        downBlockFaces.forEach(downBlockFace => {
            updatedBlockFaces.forEach(updatedBlockFace => {
                if (downBlockFace.position === updatedBlockFace.position)
                    updatedBlockFace.color = downBlockFace.color;
            });
        });
    }

    updatedFace.blockFaces = updatedBlockFaces;
    updatedFaces.push(updatedFace);

    // Update Top Face
    updatedFace = { ...upFace };
    updatedBlockFaces = updatedFace.blockFaces.map(blockFace => {
        return {
            ...blockFace,
            position: blockFace.position,
            color: blockFace.color
        }
    });

    if (direction === faceRotateDirections.clockwise) {
        leftBlockFaces.forEach(leftBlockFace => {
            updatedBlockFaces.forEach(updatedBlockFace => {
                if (leftBlockFace.position === updatedBlockFace.position)
                    updatedBlockFace.color = leftBlockFace.color;
            });
        });
    } else {
        rightBlockFaces.forEach(rightBlockFace => {
            updatedBlockFaces.forEach(updatedBlockFace => {
                if (rightBlockFace.position === 0 && updatedBlockFace.position === 8)
                    updatedBlockFace.color = rightBlockFace.color;
                else if (rightBlockFace.position === 3 && updatedBlockFace.position === 5)
                    updatedBlockFace.color = rightBlockFace.color;
                else if (rightBlockFace.position === 6 && updatedBlockFace.position === 2)
                    updatedBlockFace.color = rightBlockFace.color;
            });
        });
    }

    updatedFace.blockFaces = updatedBlockFaces;
    updatedFaces.push(updatedFace);

    // Update left Face
    updatedFace = { ...leftFace };
    updatedBlockFaces = updatedFace.blockFaces.map(blockFace => {
        return {
            ...blockFace,
            position: blockFace.position,
            color: blockFace.color
        }
    });

    if (direction === faceRotateDirections.clockwise) {
        downBlockFaces.forEach(downBlockFace => {
            updatedBlockFaces.forEach(updatedBlockFace => {
                if (downBlockFace.position === 6 && updatedBlockFace.position === 2)
                    updatedBlockFace.color = downBlockFace.color;
                else if (downBlockFace.position === 3 && updatedBlockFace.position === 5)
                    updatedBlockFace.color = downBlockFace.color;
                else if (downBlockFace.position === 0 && updatedBlockFace.position === 8)
                    updatedBlockFace.color = downBlockFace.color;
            });
        });
    } else {
        upBlockFaces.forEach(upBlockFace => {
            updatedBlockFaces.forEach(updatedBlockFace => {
                if (upBlockFace.position === updatedBlockFace.position)
                    updatedBlockFace.color = upBlockFace.color;
            });
        });
    }

    updatedFace.blockFaces = updatedBlockFaces;
    updatedFaces.push(updatedFace);

    // Update Bottom Face
    updatedFace = { ...downFace };
    updatedBlockFaces = updatedFace.blockFaces.map(blockFace => {
        return {
            ...blockFace,
            position: blockFace.position,
            color: blockFace.color
        }
    });

    if (direction === faceRotateDirections.clockwise) {
        rightBlockFaces.forEach(rightBlockFace => {
            updatedBlockFaces.forEach(updatedBlockFace => {
                if (rightBlockFace.position === updatedBlockFace.position)
                    updatedBlockFace.color = rightBlockFace.color;
            });
        });
    } else {
        leftBlockFaces.forEach(leftBlockFace => {
            updatedBlockFaces.forEach(updatedBlockFace => {
                if (leftBlockFace.position === 2 && updatedBlockFace.position === 6)
                    updatedBlockFace.color = leftBlockFace.color;
                else if (leftBlockFace.position === 5 && updatedBlockFace.position === 3)
                    updatedBlockFace.color = leftBlockFace.color;
                else if (leftBlockFace.position === 8 && updatedBlockFace.position === 0)
                    updatedBlockFace.color = leftBlockFace.color;
            });
        });
    }

    updatedFace.blockFaces = updatedBlockFaces;
    updatedFaces.push(updatedFace);
}

export const rotateUpAdjacentFaces = (updatedFaces, direction, allFaces) => {
    const upFace = allFaces.find(x => x.face.faceType === facesEnum.left);
    const downFace = allFaces.find(x => x.face.faceType === facesEnum.right);
    const leftFace = allFaces.find(x => x.face.faceType === facesEnum.front);
    const rightFace = allFaces.find(x => x.face.faceType === facesEnum.back);

    // Get the blocks that need to be rotated on the adjacent faces
    let upBlockFaces = upFace.blockFaces.filter(x => x.position === 0 || x.position === 1 || x.position === 2).map(blockFace => {
        return {
            ...blockFace,
            position: blockFace.position,
            color: blockFace.color
        }
    });

    let rightBlockFaces = rightFace.blockFaces.filter(x => x.position === 0 || x.position === 1 || x.position === 2).map(blockFace => {
        return {
            ...blockFace,
            position: blockFace.position,
            color: blockFace.color
        }
    });

    let leftBlockFaces = leftFace.blockFaces.filter(x => x.position === 0 || x.position === 1 || x.position === 2).map(blockFace => {
        return {
            ...blockFace,
            position: blockFace.position,
            color: blockFace.color
        }
    });

    let downBlockFaces = downFace.blockFaces.filter(x => x.position === 0 || x.position === 1 || x.position === 2).map(blockFace => {
        return {
            ...blockFace,
            position: blockFace.position,
            color: blockFace.color
        }
    });

    // Update Right Face
    let updatedFace = { ...rightFace };
    let updatedBlockFaces = updatedFace.blockFaces.map(blockFace => {
        return {
            ...blockFace,
            position: blockFace.position,
            color: blockFace.color
        }
    });

    if (direction === faceRotateDirections.clockwise) {
        upBlockFaces.forEach(upBlockFace => {
            updatedBlockFaces.forEach(rightBlockFace => {
                if (upBlockFace.position === rightBlockFace.position)
                    rightBlockFace.color = upBlockFace.color;
            });
        });
    } else {
        downBlockFaces.forEach(downBlockFace => {
            updatedBlockFaces.forEach(updatedBlockFace => {
                if (downBlockFace.position === updatedBlockFace.position)
                    updatedBlockFace.color = downBlockFace.color;
            });
        });
    }

    updatedFace.blockFaces = updatedBlockFaces;
    updatedFaces.push(updatedFace);

    // Update Top Face
    updatedFace = { ...upFace };
    updatedBlockFaces = updatedFace.blockFaces.map(blockFace => {
        return {
            ...blockFace,
            position: blockFace.position,
            color: blockFace.color
        }
    });

    if (direction === faceRotateDirections.clockwise) {
        leftBlockFaces.forEach(leftBlockFace => {
            updatedBlockFaces.forEach(updatedBlockFace => {
                if (leftBlockFace.position === updatedBlockFace.position)
                    updatedBlockFace.color = leftBlockFace.color;
            });
        });
    } else {
        rightBlockFaces.forEach(rightBlockFace => {
            updatedBlockFaces.forEach(updatedBlockFace => {
                if (rightBlockFace.position === updatedBlockFace.position)
                    updatedBlockFace.color = rightBlockFace.color;
            });
        });
    }

    updatedFace.blockFaces = updatedBlockFaces;
    updatedFaces.push(updatedFace);

    // Update left Face
    updatedFace = { ...leftFace };
    updatedBlockFaces = updatedFace.blockFaces.map(blockFace => {
        return {
            ...blockFace,
            position: blockFace.position,
            color: blockFace.color
        }
    });

    if (direction === faceRotateDirections.clockwise) {
        downBlockFaces.forEach(downBlockFace => {
            updatedBlockFaces.forEach(updatedBlockFace => {
                if (downBlockFace.position === updatedBlockFace.position)
                    updatedBlockFace.color = downBlockFace.color;
            });
        });
    } else {
        upBlockFaces.forEach(upBlockFace => {
            updatedBlockFaces.forEach(updatedBlockFace => {
                if (upBlockFace.position === updatedBlockFace.position)
                    updatedBlockFace.color = upBlockFace.color;
            })
        })
    }

    updatedFace.blockFaces = updatedBlockFaces;
    updatedFaces.push(updatedFace);

    // Update Bottom Face
    updatedFace = { ...downFace };
    updatedBlockFaces = updatedFace.blockFaces.map(blockFace => {
        return {
            ...blockFace,
            position: blockFace.position,
            color: blockFace.color
        }
    });

    if (direction === faceRotateDirections.clockwise) {
        rightBlockFaces.forEach(rightBlockFace => {
            updatedBlockFaces.forEach(updatedBlockFace => {
                if (rightBlockFace.position === updatedBlockFace.position)
                    updatedBlockFace.color = rightBlockFace.color;
            });
        });
    } else {
        leftBlockFaces.forEach(leftBlockFace => {
            updatedBlockFaces.forEach(updatedBlockFace => {
                if (leftBlockFace.position === updatedBlockFace.position)
                    updatedBlockFace.color = leftBlockFace.color;
            });
        });
    }

    updatedFace.blockFaces = updatedBlockFaces;
    updatedFaces.push(updatedFace);
}

export const rotateDownAdjacentFaces = (updatedFaces, direction, allFaces) => {
    const upFace = allFaces.find(x => x.face.faceType === facesEnum.left);
    const downFace = allFaces.find(x => x.face.faceType === facesEnum.right);
    const leftFace = allFaces.find(x => x.face.faceType === facesEnum.back);
    const rightFace = allFaces.find(x => x.face.faceType === facesEnum.front);

    // Get the blocks that need to be rotated on the adjacent faces
    let upBlockFaces = upFace.blockFaces.filter(x => x.position === 6 || x.position === 7 || x.position === 8).map(blockFace => {
        return {
            ...blockFace,
            position: blockFace.position,
            color: blockFace.color
        }
    });

    let rightBlockFaces = rightFace.blockFaces.filter(x => x.position === 6 || x.position === 7 || x.position === 8).map(blockFace => {
        return {
            ...blockFace,
            position: blockFace.position,
            color: blockFace.color
        }
    });

    let leftBlockFaces = leftFace.blockFaces.filter(x => x.position === 6 || x.position === 7 || x.position === 8).map(blockFace => {
        return {
            ...blockFace,
            position: blockFace.position,
            color: blockFace.color
        }
    });

    let downBlockFaces = downFace.blockFaces.filter(x => x.position === 6 || x.position === 7 || x.position === 8).map(blockFace => {
        return {
            ...blockFace,
            position: blockFace.position,
            color: blockFace.color
        }
    });

    // Update Right Face
    let updatedFace = { ...rightFace };
    let updatedBlockFaces = updatedFace.blockFaces.map(blockFace => {
        return {
            ...blockFace,
            position: blockFace.position,
            color: blockFace.color
        }
    });

    if (direction === faceRotateDirections.clockwise) {
        upBlockFaces.forEach(upBlockFace => {
            updatedBlockFaces.forEach(rightBlockFace => {
                if (upBlockFace.position === rightBlockFace.position)
                    rightBlockFace.color = upBlockFace.color;
            });
        });
    } else {
        downBlockFaces.forEach(downBlockFace => {
            updatedBlockFaces.forEach(updatedBlockFace => {
                if (downBlockFace.position === updatedBlockFace.position)
                    updatedBlockFace.color = downBlockFace.color;
            });
        });
    }

    updatedFace.blockFaces = updatedBlockFaces;
    updatedFaces.push(updatedFace);

    // Update Top Face
    updatedFace = { ...upFace };
    updatedBlockFaces = updatedFace.blockFaces.map(blockFace => {
        return {
            ...blockFace,
            position: blockFace.position,
            color: blockFace.color
        }
    });

    if (direction === faceRotateDirections.clockwise) {
        leftBlockFaces.forEach(leftBlockFace => {
            updatedBlockFaces.forEach(updatedBlockFace => {
                if (leftBlockFace.position === updatedBlockFace.position)
                    updatedBlockFace.color = leftBlockFace.color;
            });
        });
    } else {
        rightBlockFaces.forEach(rightBlockFace => {
            updatedBlockFaces.forEach(updatedBlockFace => {
                if (rightBlockFace.position === updatedBlockFace.position)
                    updatedBlockFace.color = rightBlockFace.color;
            });
        });
    }

    updatedFace.blockFaces = updatedBlockFaces;
    updatedFaces.push(updatedFace);

    // Update left Face
    updatedFace = { ...leftFace };
    updatedBlockFaces = updatedFace.blockFaces.map(blockFace => {
        return {
            ...blockFace,
            position: blockFace.position,
            color: blockFace.color
        }
    });

    if (direction === faceRotateDirections.clockwise) {
        downBlockFaces.forEach(downBlockFace => {
            updatedBlockFaces.forEach(updatedBlockFace => {
                if (downBlockFace.position === updatedBlockFace.position)
                    updatedBlockFace.color = downBlockFace.color;
            });
        });
    } else {
        upBlockFaces.forEach(upBlockFace => {
            updatedBlockFaces.forEach(updatedBlockFace => {
                if (upBlockFace.position === updatedBlockFace.position)
                    updatedBlockFace.color = upBlockFace.color;
            });
        });
    }

    updatedFace.blockFaces = updatedBlockFaces;
    updatedFaces.push(updatedFace);

    // Update Bottom Face
    updatedFace = { ...downFace };
    updatedBlockFaces = updatedFace.blockFaces.map(blockFace => {
        return {
            ...blockFace,
            position: blockFace.position,
            color: blockFace.color
        }
    });

    if (direction === faceRotateDirections.clockwise) {
        rightBlockFaces.forEach(rightBlockFace => {
            updatedBlockFaces.forEach(updatedBlockFace => {
                if (rightBlockFace.position === updatedBlockFace.position)
                    updatedBlockFace.color = rightBlockFace.color;
            });
        });
    } else {
        leftBlockFaces.forEach(leftBlockFace => {
            updatedBlockFaces.forEach(updatedBlockFace => {
                if (leftBlockFace.position === updatedBlockFace.position)
                    updatedBlockFace.color = leftBlockFace.color;
            });
        });
    }

    updatedFace.blockFaces = updatedBlockFaces;
    updatedFaces.push(updatedFace);
}