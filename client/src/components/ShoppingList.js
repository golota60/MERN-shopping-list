import React,{Component} from 'react';
import {ListGroup,ListGroupItem,Button,Container} from 'reactstrap';
import uuid from 'uuid';

class ShoppingList extends Component{

state={
    items:[
    {id:uuid(), name:'jeff'}

]}

render(){
    const {items} = this.state;
    return(
        <Container>
            <div>
            <Button
                outline color = "primary"
                onClick={() =>{
                    const name = prompt("Add item");
                    if(name){
                        this.setState(state => ({
                            items: [...state.items, {id: uuid(), name }]
                        }));
                    }
                }}
                >Add Item</Button>
                </div>
        <ListGroup>
            {items.map(({id,name}) =>(
                <ListGroupItem>
                    <Button 
                    className = 'remove-button'
                    color = 'danger'
                    size = 'sm'
                    onClick={() => {
                        this.setState(state => ({
                            items: state.items.filter(item => item.id !== id)
                        }));
                    }}
                    >&times;
                    </Button>
                    {name}
                </ListGroupItem>    
            ))}
        </ListGroup>

        </Container>
    );
}

}

export default ShoppingList;