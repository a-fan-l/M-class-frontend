
export interface RouteProps {
    /**
   * @name: title
   * @msg: route title
   */
  title: string
  /**
   * @name: desc
   * @msg: route desc
   */
  desc?: string
  /**
   * @name: desc
   * @msg: route desc
   */
  href: string
  /**
   * @name: icon
   * @msg: route icon
   */
  icon?: {
    /**
     * @name: component
     * @msg: route icon component
     */
    component?: React.ReactNode
  }
  /**
   * @name: disable
   * @msg: route disable
   */
  disable?: boolean
  /**
   * @name: isMenu
   * @msg: route is menu route
   */
  isMenu?: boolean
  /**
   * @name: menuId
   * @msg: route menuId
   */
  id: string
  /**
   * @name: menuKey
   * @msg: route menuKey
   */
  menuKey?: string[]
  /**
   * @name: menuUsed
   * @msg: menu using in pc or mobile or ipad 0: pc, 1: mobile, 2: ipad, 4: all
   */
  menuUsed?: Array<number>
  /**
   * @name: target
   * @msg: route target
   */
  target?: '_blank' | '_self' | '_parent' | '_top'
  /**
   * @name: warningInfo
   * @msg: window warning info is required or not for example: show warning while warningInfo is true
   */
  warningInfo?: boolean
  /**
   * @name: isNotLink
   * @msg: route item is not link
   */
  isNotLink?: boolean
  /**
   * @name: value
   * @msg: route item is not link representative value
   */
  value?: string
  /**
   * @name: isLogined
   * @msg: route Login Required or not
   */
  isLogined?: boolean
  /**
   * @name: used
   * @msg: using in pc or mobile or ipad 0: pc, 1: mobile, 2: ipad, 4: all
   */
  used?: Array<number>
  /**
   * @name: layout
   * @msg: what layout does the current route need to use
   */
  layout?: number
  /**
   * @name: layoutProps
   * @msg: what layout props does the current route need to use
   */
  layoutProps?: {
    content?: {
      center?: boolean
    }
  }
  /**
   * @name: permission
   * @msg: permission
   */
  permission?: Array<number>

  /**
   * @name: onClick
   * @msg: route event
   */
  onClick?: (data: RouteProps) => void
  /**
   * @name: pageLayout
   * @msg: router page header layout
   */
  pageHeaderLayout?: number
  /**
   * @name: pageLayout
   * @msg: router page footer layout
   */
  pageFooterLayout?: number
  /**
   * @name: isBlack
   * @msg: router is check black
   */
  isBlacked?: boolean
  /**
   * @name: isWallet
   * @msg:router is check wallet
   */
  isWalleted?: boolean
}

export interface RouteBaseProps {
    /**
     * @name: id
     * @msg: route id
     */
    id: string
    /**
     * @name: title
     * @msg: route title
     */
    title?: string
    /**
     * @name: desc
     * @msg: route desc
     */
    desc?: string
    /**
     * @name: href
     * @msg: route href
     */
    href?: string
    /**
     * @name: disable
     * @msg: route disable
     */
    disable?: boolean
    /**
     * @name: value
     * @msg: route value
     */
    value?: string
    /**
     * @name: target
     * @msg: route target
     */
    target?: '_blank' | '_self' | '_parent' | '_top'
    /**
     * @name: isMenu
     * @msg: route is menu route
     */
    isMenu?: boolean
}
  