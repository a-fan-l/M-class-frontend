import wrap from '@config/router/wrap'
import course from '@config/router/course'
import { RouteProps } from '@config/router/router'

export const home: RouteProps = {
  title: 'menu.home',
  href: '/',
  isMenu: true,
  id: '1',
  menuKey: ['1'],
}

export const desktopRouter = [home, wrap, course]

export const mobileRouter = [home, wrap, course]

const router = { wrap }

export default router
