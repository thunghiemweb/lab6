import React from 'react';
import {
    // Card,
    CardImg,
    // CardImgOverlay,
    CardText,
    CardBody,
    CardTitle
} from 'reactstrap';

// import dateFormat from "dateformat";
// {dateFormat(nv.startDate, "dd/mm/yyyy")}


function RenderDish({ dish }) {
    return (
        < div className="col-12 col-md-5 m-1" >
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
        </div >
    );
}


function RenderComment({ comments }) {
    if (comments != null) {
        console.log(comments);
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">

                    {comments.map((comment) => {
                        return (
                            <div key={comment._id}>
                                <li>
                                    <p>{comment.comment}</p>
                                    <p>{comment.rating} stars</p>
                                    <p>--{comment.author.firstname} {comment.author.lastname} </p>
                                </li>
                            </div>
                        );
                    })}

                </ul>
            </div>


        );
    }


}


const DishDetail = (props) => {

    if (props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <RenderDish dish={props.dish} />

                    <RenderComment comments={props.dish.comments} />

                </div>
            </div>
        );
    }

    else {
        return (
            <div className="container">
                <div className="col-12 col-md-5 m-1">
                    <CardBody>
                        <CardTitle>Bấm chọn món bất kỳ để xem thông tin</CardTitle>
                    </CardBody>
                </div>
            </div>
        );
    }

}


export default DishDetail;