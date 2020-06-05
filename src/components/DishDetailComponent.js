import React,{Component} from  'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap';

class DishDetail extends Component{
    
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
    renderComments(comments){
        const commentsList=comments.map((comment)=>{
            return(
                <li key={comment.id}>
                    <p>
                        {comment.comment}
                        <br></br>
                        --{comment.author}{" , "}{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                    </p>
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
                <div className="container">
                    <div class="row">
                        <div class="col-12 col-md-5 m-1">
                            {this.renderDish(this.props.dish)}
                        </div>
                        <div class="col-12 col-md-5 m-1">
                            {this.renderComments(this.props.dish.comments)}
                        </div>
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