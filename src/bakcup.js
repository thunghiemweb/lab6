import React, { Component } from 'react';
import {
    Card,
    CardImg,
    // CardImgOverlay,
    CardText,
    CardBody,
    CardTitle
} from 'reactstrap';


class DishDetail extends Component {
    constructor(props) {
        super(props);
    }



    render() {

        // render comment
        if (this.props.dish != null) {


            return (
                <div className="container">
                    <div className="row">

                        {/* Hiển thị ảnh và mô tả của món ăn  */}
                        <div className="col-12 col-md-5 m-1">
                            <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                        </div>

                        {/* Hiển thị comment của món ăn */}
                        <div className="col-12 col-md-5 m-1">
                            <CardBody>
                                <CardTitle>Comments</CardTitle>

                            </CardBody>
                        </div>

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
}

export default DishDetail;