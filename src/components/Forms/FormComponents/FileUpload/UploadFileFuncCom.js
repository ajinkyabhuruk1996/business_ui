import React, { useState } from "react";
//import './App.css';
import ImageResize from "./ImageResize";

function UploadFileFuncCom( props) {
    // const [imageToResize, setImageToResize] = useState(undefined);
    // const [resizedImage, setResizedImage] = useState(undefined);

    const { 
        imageToResize,
        resizedImage,
        setImageToResize,
        setResizedImage,
        setImageToResizeString,
    } = props;

    const onUploadFile = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            setImageToResize(event.target.files[0]);
        }
    };

    return (
        <>
            {/* <h3>Image Resizer</h3> */}
            <p>
                Please, upload an image to resized by 50%
            </p>
            <input
                type="file"
                accept="image/*"
                onChange={onUploadFile}
            />
            <div style={{ "display" : "flex"}} >
                <ImageResize
                    imageToResize={imageToResize}
                    onImageResized={(resizedImage) => setResizedImage(resizedImage)}
                    onOrigImgBase64StringResized={(img) => setImageToResizeString(img)}
                />
                {
                    resizedImage &&
                    (<>
                        <span>Resized Image</span>
                        <img
                            alt="Resize Image"
                            src={resizedImage}
                            height={200}
                            width={200}
                        />
                    </>)
                }
            </div>
        </>
    );
}

export default UploadFileFuncCom;