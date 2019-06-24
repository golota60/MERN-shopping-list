import React,{Component} from 'react';
import{
    Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

class AppNavbar extends Component{
constructor(props){
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
        isOpen: false
    };
}

toggle(){
    this.setState({
        isOpen: !this.state.isOpen
    });
}

render(){
    return (
      <Navbar color="black" light expand="sm" className="mb-5">
        <Container>
          <NavbarBrand href="/">Shopping List</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="http://github.com/golota60">
                  My Github 
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
}
}



export default AppNavbar;