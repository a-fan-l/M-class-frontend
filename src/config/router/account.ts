import { RouteProps } from './router'


export const home: RouteProps = {
  id: 'account',
  title: 'menu.account',
  href: '/account',
  isMenu: true,
  menuKey: ['account'],
}

export const routes = [home]

const router = {
  ...home,
}

export default router
