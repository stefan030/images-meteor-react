import React from 'react';
import ImageDetail from './image_detail';


const ImageList = (props) => {
    // Every image that is not an album will pass this test and be added to validImages array
    const validImages = props.images.filter(image => {
        return !image.is_album;
    })

    // Map over validImages array
    const RenderedImages = validImages.map((image) => {
        return <ImageDetail key={image.title} image={image} />
    });

    return(
        <ul className='media-list list-group'>
            { RenderedImages }
        </ul>
    )
};


export default ImageList;