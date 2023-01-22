import { useRouter } from 'next/router'
import { Link, LinkProps } from '@chakra-ui/react'

interface ActiveLinkProps extends LinkProps {
  href: string
  children: string
}

export function ActiveLink({ href, children, ...rest }: ActiveLinkProps) {
  const { asPath } = useRouter()

  const isActiveLink = asPath === href || asPath === ''

  return (
    <Link
      href={href}
      fontSize='lg'
      opacity={isActiveLink ? 1 : 0.7}
      color={isActiveLink ? '#FF9900' : 'gray.50'}
      fontWeight={isActiveLink ? 'semibold' : 'normal'}
      _hover={{ opacity: 1 }}
      {...rest}
    >
      {children}
    </Link>
  )
}
