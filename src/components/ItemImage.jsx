import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import nophoto from '../img/nophoto.png';
ItemImage.propTypes = {
    
};

function ItemImage(props) {

    const initState={
        error:false,
        loading:true,
        src:(props.images.length>0) ? props.images[0] : '' ,
        imageId:(props.images.length>0) ? 0 : -1 };
    const [state,setState] = useState(initState);
    const handleError = evt => {
        if (!state.error && state.imageId!=-1 && state.imageId<(props.images.length-1))
        {
            setState(prevState => ({src:props.images[prevState.imageId+1],imageId:(prevState.imageId+1)}));
        }
        else
        if (!state.error)
        {
        setState({error:true, src:nophoto});
        }
        else
        {
            setState({src:null});
        }
    };
    useEffect(()=>{
        setState({src:null});
        setState(initState);
    },[props.images]);
    return (
        <img src={state.src}
             className={props.classes}  alt={props.alt} onError={handleError} />
    );
}

export default ItemImage;