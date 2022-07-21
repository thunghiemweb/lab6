// import React from 'react';
// import {
//     CardImg,
//     CardText,
//     CardBody,
//     CardTitle,
// } from 'reactstrap';

// function RenderDish({ dish }) {
//     return (
//         < div className="col-12 col-md-5 m-1" >
//             <CardImg width="100%" src={dish.image} alt={dish.name} />
//             <CardTitle>{dish.name}</CardTitle>
//             <CardText>{dish.description}</CardText>
//         </div >
//     );
// }


// function RenderComment({ comments }) {
//     if (comments != null) {
//         console.log(comments);
//         return (
//             <div className="col-12 col-md-5 m-1">
//                 <h4>Comments</h4>
//                 <ul className="list-unstyled">

//                     {comments.map((comment) => {
//                         return (
//                             <div key={comment._id}>
//                                 <li>
//                                     <p>{comment.comment}</p>
//                                     <p>{comment.rating} stars</p>
//                                     <p>--{comment.author.firstname} {comment.author.lastname} </p>
//                                 </li>
//                             </div>
//                         );
//                     })}

//                 </ul>
//             </div>

//         );
//     }


// }


// const DishDetail = (props) => {

//     if (props.dish != null) {
//         return (
//             <div className="container">
//                 <div className="row">
//                     <RenderDish dish={props.dish} />

//                     <RenderComment comments={props.dish.comments} />

//                 </div>
//             </div>
//         );
//     }

//     else {
//         return (
//             <div className="container">
//                 <div className="col-12 col-md-5 m-1">
//                     <CardBody>
//                         <CardTitle>Bấm chọn món bất kỳ để xem thông tin</CardTitle>
//                     </CardBody>
//                 </div>
//             </div>
//         );
//     }

// }


// export default DishDetail;




import React from 'react';
import {
    Card, CardImg, CardText, CardBody, CardTitle,
    Breadcrumb, BreadcrumbItem
} from 'reactstrap';

import { Link } from 'react-router-dom';

function RenderDish({ dish }) {
    return (
        <div className='col-12 col-md-5 m-1'>
            <Card>
                <CardImg top src={dish.image} atl={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({ comments }) {
    if (comments != null)
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4>Comments</h4>
                <ul className='list-unstyled'>
                    {comments.map((comment) => {
                        return (
                            <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>--{comment.author}</p>
                            </li>
                        );
                    })}
                </ul>

            </div>
        );
    else
        return (
            <div> </div>
        );
}


const DishDetail = (props) => {
    if (props.dish != null)
        return (
            <div className='container'>

                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>

                <div className='row'>
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments} />

                </div>
            </div>
        );
    else
        return (
            <div></div>
        );
}
export default DishDetail;