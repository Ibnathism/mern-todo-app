import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

class AppNavbar extends Component {
    //One way
    /*constructor(props) {
        super(props);
        
        //this is the alternate of the arrow function
        //this.toggle = this.toggle.bind(this);

        this.state = {
            isOpen: false

        }
    }*/

    //other way
    state = {
        isOpen: false
    }


    toggle = () =>  {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }    
    render() {
        return(
        <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/">Todo List</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/ibnathism">
                                    Github
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://www.facebook.com/ibnathism.1729">
                                    Facebook
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://www.instagram.com/ibnathism/">
                                    Instagram
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
        )
    }
}


export default AppNavbar;