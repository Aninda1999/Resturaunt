import React from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap'

const MenuItem = ({ dish, onselectdish }) => {
    return (
        <div style={{ width: "400px", margin: "10px" }}>

            <Card inverse style={{ cursor: "pointer" }} onClick={() => onselectdish(dish)}>
                <CardImg
                    alt={dish.name}
                    src={dish.image}
                    style={{
                        height: 270,
                        opacity: 0.7
                    }}
                    width="100%"
                />
                <CardImgOverlay>
                    <CardTitle tag="h5" style={{ color: ' #6f200e ', fontWeight: 'bold' }}>
                        {dish.name}
                    </CardTitle>

                </CardImgOverlay>
            </Card>
        </div>
    )
}

export default MenuItem