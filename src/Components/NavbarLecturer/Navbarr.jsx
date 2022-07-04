import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'

export default function Navbarr({ nav1link, nav2link, nav3link, nav1, nav2, nav3 , nav4, nav4link }) {
  let user= JSON.parse(sessionStorage.getItem('user-info'))
  console.warn(user)
  const history= useHistory();

  function logout(){
    sessionStorage.clear();
    history.push('/faculty')
  }
  return (
    <div>
      <Navbar className="navbar" variant="dark">
        <Navbar.Brand href="#home"><span className="text-danger">O</span>nline <span class="text-primary">P</span>lagiarism <span class="text-warning">C</span>hecker</Navbar.Brand>
        <Nav className="m-auto">
          <Link to="/faculty" className="nav-link">Home</Link>
          <Link to="/whats" className="nav-link">What is <span class="text-danger">O</span>nline <span class="text-primary">P</span>lagiarism <span class="text-warning">C</span>hecker?</Link>
          <Link to={nav1link} className="nav-link" href="#upload">{nav1}</Link>
          <Link to={nav2link} className="nav-link" href="#upload">{nav2}</Link>
          <Link to={nav4link} className="nav-link" href="#upload">{nav4}</Link>
        </Nav>
        {sessionStorage.getItem('user-info')?
        <Nav className="m-auto text-white">
          <NavDropdown title={user && user.lecturername}>
            <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        :null
  }
      </Navbar>
    </div>
  )
}