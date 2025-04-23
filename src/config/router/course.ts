import { RouteProps } from './router'

export const key = 'AIR-DROPS'
export const keyDetails = `${key}-detail`

export const home: RouteProps = {
  id: 'course',
  title: 'menu.course',
  href: '/course',
  isMenu: true,
  menuKey: ['course'],
}

export const details: RouteProps = {
    id: keyDetails,
    href: '/airdrops/details/',
    title: 'menu.course',
  }

  
export const routes = [home]

const router = {
  ...home,
}

export default router
