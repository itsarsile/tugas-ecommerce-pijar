import { Link, routes } from '@redwoodjs/router'

import Logo from './blanja_logo.svg'

const LogoComponent = ({ className }) => (
  <Link to={routes.home()}>
    <Logo className={className} />
  </Link>
)

export default LogoComponent
