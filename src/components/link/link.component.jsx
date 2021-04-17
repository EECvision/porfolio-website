import { Link } from 'react-scroll';

const LinkItem = ({ children, clickHandler, url }) => (
  <Link
    onClick={clickHandler}
    to={url}
    activeClass="active"
    spy={true}
    smooth={true}
    offset={-70}
    duration={300}
  >
    {children}
  </Link>
)

export default LinkItem
