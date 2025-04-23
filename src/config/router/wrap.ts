import { RouteProps } from './router'

export const home: RouteProps = {
  id: 'wrap',
  title: 'menu.wrap',
  href: '/wrap',
  isMenu: true,
  menuKey: ['wrap'],
}

export const routes = [home]

const router = {
  ...home,
}

export default router
