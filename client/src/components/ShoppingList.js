import React,{Component} from 'react';
import {ListGroup,ListGroupItem,Button,Container} from 'reactstrap';

class ShoppingList extends Component{
render(){
    return(
        <Container>
        <ListGroup>
            <ListGroupItem>elo</ListGroupItem>
            <ListGroupItem>siema</ListGroupItem>
            <ListGroupItem>czes</ListGroupItem>
            <ListGroupItem>elo2</ListGroupItem>
            <div>
            <Button
                outline color = "primary"
                >Add Item</Button>
                </div>
        </ListGroup>

        </Container>
    );
}

}

export default ShoppingList;