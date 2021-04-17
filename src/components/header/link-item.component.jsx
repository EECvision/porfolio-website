import { Link } from 'react-scroll';

const LinkItem = ({ children, clickHandler }) => (
  <Link
    onClick={() => clickHandler()}
    to={children.toLowerCase()}
    activeClass="active"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
  >
    {children}
  </Link>
)

export default LinkItem
