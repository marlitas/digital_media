import {NavLink, Link} from 'react-router-dom'

function header({ title }) {
  return (
    <div className='nav-bar'>
      <Link to='/'>
        <h1 className="site-title">{title}</h1>
      </Link>
      <div className="menu">
        <NavLink activeClassName='active' to='/portfolios'>Portfolios</NavLink>
        <NavLink activeClassName='active' to='/contact'>Contact</NavLink>
        <NavLink activeClassName='active' to='/resources'>Resources</NavLink>
      </div>
    </div>
  )
}

export default header
