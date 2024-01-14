import React from 'react'
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap'
import Loadcomments from './Loadcomments'
import CommentForm from './CommentForm'

const DishDtl = ({ dish, comments }) => {
    return (
        <div>  <Card className="my-2">
            <CardImg
                alt={dish.name}
                src={dish.image}
                style={{
                    height: "100 %"
                }}
                width="100%"
            />
            <CardBody>
                <CardTitle tag="h5">
                    {dish.name}
                </CardTitle>
                <CardText>
                    {dish.description}
                </CardText>
                <CardText>
                    Bdt&nbsp;{dish.price}/-
                </CardText>
                <hr />
                <Loadcomments comments={comments} />
                <hr/>
                <CommentForm dishId={dish.id} />
            </CardBody>
        </Card>



        </div>
    )
}

export default DishDtl