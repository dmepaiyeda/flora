import React from 'react'
import {Badge} from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa';
import { FaCaretDown } from 'react-icons/fa';


export const NewPostBadge = () => {
    return (
        <h4>
            <Badge style={{width:"8em", background: "#C4C4C4", borderRadius: "40px"}} variant="light">New Post <FaPlus style={{fontSize: "0.7em"}}/> </Badge>
            
        </h4>
            
    )
}

export const MostPopularBadge = () => {
    return (
        <h4>
        <Badge style={{width:"8em", background: "#C4C4C4", borderRadius: "40px"}} variant="light">Most Popular <FaCaretDown style={{fontSize: "0.7em"}}/></Badge>
        </h4>
    )
}
