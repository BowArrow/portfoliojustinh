import React from "react";
import Collection from '../Collection/index.jsx';
import { useParams } from "react-router-dom";

const CollectionWrapper = () => {
    const {key} = useParams();

    return <Collection iKey={key} />
}

export default CollectionWrapper;