import {Container,Navbar,FormControl} from 'react-bootstrap'
import { NavLink } from'react-router-dom'
import logo from './logo.jpg'
function Header(){
  return(
    <Navbar className='nav-head' style={{height:'80px'}}>
      <Container>
        <Navbar.Brand>
          <NavLink to={'/'}><img src={logo} alt="" width={100} className='logoimg'/></NavLink>
        </Navbar.Brand>
        <Navbar.Text className='search'>
          <FormControl
            style={{width:'450px'}}
            placeholder='search a product'
            className='m-auto'
          />
        </Navbar.Text>
        <NavLink to={"/"} className='home'>Home</NavLink>
        <NavLink to={"/product"} className='product'>Product</NavLink>
        <NavLink to={"/about"} className='about'>About</NavLink>
        <NavLink to={"/contact"} className='contact'>Contact</NavLink>
        <NavLink to={"/signup"} className='signup'>Sign-Up</NavLink>
        <NavLink to={"/cart"} className='cart'>Cart<span className='cart-count'>0</span></NavLink>
        
      </Container>
    </Navbar>
  )
}

export default Header;