import React from 'react'
import Button from '@mui/material/Button';

const Square = (props) => {
    return (
        <div className="Square">
            <Button 
            variant="text" 
            style={{ width: '100px', height: '100px' }}
            onClick={props.onClick}
            >
            <h1>{props.value}</h1></Button>
        </div>
    )
}

export default Square