import React from 'react';

const ImageDetail = (props) => {
    // props.image => this is the image object
    // props.image.title
    // props.image.link

  return(
      <div>
        <div>{props.image.title}</div>
        <img src={props.image.link}></img>
      </div>
  )
};

export default ImageDetail;