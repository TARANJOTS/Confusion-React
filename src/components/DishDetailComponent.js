import React,{Component} from  'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap';

class DishDetail extends Component{
    
    constructor(props){
        super(props);
    }
    
    renderDish(dish){
        if(dish!=null){
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }
    renderComments(){
        const commentsList=this.props.dish.comments.map((comment)=>{
            return(
                <li key={comment.id}>
                    {comment.comment}
                    <br></br>
                    --{comment.author}{comment.date}
                    <br></br>
                </li>
            );
        });
        
        return (
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {commentsList}
                </ul>
            </div>
        )
    }
    
    render(){
        if(this.props.dish){
            return(
                <div class="row">
                    <div class="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div class="col-12 col-md-5 m-1">
                        {this.renderComments()}
                    </div>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
        
    }
}
export default DishDetail;