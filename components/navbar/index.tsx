import { useBreakpointValue } from '@chakra-ui/react'
import { NavDesktop } from './nav-desktop'
import { HeaderMobile } from './nav-mobile'

export function Navbar() {
  const isHeaderMobile = useBreakpointValue({
    base: true,
    lg: false,
  })

  if (isHeaderMobile) {
    return <HeaderMobile />
  }

  return <NavDesktop />
}
