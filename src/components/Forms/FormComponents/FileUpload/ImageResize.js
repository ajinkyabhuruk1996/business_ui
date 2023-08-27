import React, {useEffect, useState} from "react";
import Resizer from "react-image-file-resizer";

function ImageResize(props) {
    const {imageToResize, onImageResized, onOrigImgBase64StringResized, resizeAspect, resizeQuality} = props;

    const [imageToResizeUri, setImageToResizeUri] = useState();
    const [imageToResizeWidth, setImageToResizeWidth] = useState();
    const [imageToResizeHeight, setImageToResizeHeight] = useState();

    useEffect(() => {
        if (imageToResize) {
            const reader = new FileReader();

            reader.addEventListener('load', () => {
                setImageToResizeUri(reader.result);
            });

            reader.readAsDataURL(imageToResize);
        }
    }, [imageToResize])

    useEffect(() => {
        if (imageToResize && imageToResizeWidth && imageToResizeHeight) {
            Resizer.imageFileResizer(
                imageToResize,
                imageToResizeWidth * resizeAspect,
                imageToResizeWidth * resizeAspect,
                "JPEG",
                resizeQuality,
                0,
                (uri) => {
                    onImageResized(uri)
                },
                "base64"
            );
            Resizer.imageFileResizer(
                imageToResize,
                imageToResizeWidth * 1,
                imageToResizeWidth * 1,
                "JPEG",
                resizeQuality,
                0,
                (uri) => {
                    onOrigImgBase64StringResized(uri)
                },
                "base64"
            );
        }
    }, [
        imageToResize, imageToResizeWidth, imageToResizeHeight,
        onImageResized, resizeAspect, resizeQuality
    ]);

    return (
        <img
            src={imageToResizeUri}
            onLoad= {(e) => {
                const img = e.target;
                setImageToResizeWidth(img.width);
                setImageToResizeHeight(img.height);
            }}
            // crossorigin="anonymous" // to avoid CORS-related problems
            height={200}
            width={200}
        />
    );
}

ImageResize.defaultProps = {
    onImageResized: () => {},
    onOrigImgBase64StringResized: () => {},
    resizeAspect: 0.6,
    resizeQuality: 100
}

export default ImageResize;