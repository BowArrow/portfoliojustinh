import React from "react";
import Collection from '../Collection';
import { useParams } from "react-router-dom";

export const CollectionWrapper = () => {
    const {key} = useParams();

    return <Collection iKey={key} />
}