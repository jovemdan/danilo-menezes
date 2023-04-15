import { useRouter } from 'next/router'
import NextLink from 'next/link'
import { Link, LinkProps } from '@chakra-ui/react'

interface ActiveLinkProps extends LinkProps {
  href: string
  children: string
  pathWithParams?: string
}

export function ActiveLink({ href, children, pathWithParams, ...rest }: ActiveLinkProps) {
  const { asPath } = useRouter()
  let isActiveLink: boolean = false

  if (pathWithParams) {
    isActiveLink = asPath === pathWithParams
  }
  else {
    isActiveLink = asPath === href || asPath === ''
  }

  return (
    <NextLink href={href} passHref>
      <Link
        fontSize='lg'
        opacity={isActiveLink ? 1 : 0.7}
        color={isActiveLink ? '#FF9900' : 'gray.50'}
        fontWeight={isActiveLink ? 'semibold' : 'normal'}
        _hover={{ opacity: 1 }}
        {...rest}
      >
        {children}
      </Link>
    </NextLink>
  )
}
