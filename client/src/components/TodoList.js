import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid/v1';

class TodoList extends Component {
    state = {
        items: [
            { id: uuid(), name: 'Watch TV'},
            { id: uuid(), name: 'Buy Groceries'},
            { id: uuid(), name: 'Call Munu'},
            { id: uuid(), name: 'Help Mom'}
        ]
    }

    render(){
        const { items } = this.state;
        return(
            <Container>
                <Button 
                color="dark"
                style={{marginBottom: '2rem'}}
                onClick={() => {
                    const name = prompt('Enter Todo');
                    if(name) {
                        this.setState(state => ({
                            items: [...state.items, { id: uuid(), name }]
                        }));
                    }
                }}   
                >Add Todo</Button>
                <ListGroup>
                    <TransitionGroup className="todo-list">
                        {items.map(({ id, name }) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button 
                                    className="remove-btn" 
                                    color="danger" 
                                    size="sm"
                                    onClick={() => {
                                        this.setState(state => ({
                                            items: state.items.filter(item => item.id !== id)
                                        }))
                                    }}
                                    >&times;
                                    </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

export default TodoList;