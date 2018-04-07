import Layout from 'antd/lib/layout'
import 'antd/lib/layout/style'

import Brand from './Brand'
import BrandImage from './BrandImage'
import Menu from './Menu'
import Icon from './Icon'
import Link from './Link'

const { Header: Navbar } = Layout

Navbar.Brand = Brand
Navbar.BrandImage = BrandImage
Navbar.Icon = Icon
Navbar.Link = Link
Navbar.Menu = Menu

export default Navbar
