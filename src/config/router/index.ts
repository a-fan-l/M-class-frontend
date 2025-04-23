import wrap from '@config/router/wrap'
import course from '@config/router/course'
import { RouteProps } from '@config/router/router'
import account from '@config/router/account'

export const home: RouteProps = {
  title: 'menu.home',
  href: '/',
  isMenu: true,
  id: '1',
  menuKey: ['1'],
}

export const desktopRouter = [home, course, account]

export const mobileRouter = [home, course, account]

const router = { wrap }

export default router
