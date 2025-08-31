'use client'

import Link from 'next/link'
import clsx from 'clsx'
import { useClientTranslation } from '@/hooks/useClientTranslation/useClientTranslation'
import { navigation } from './navigation'

const NavList = ({ listStyles, type, setIsBurgerMenuOpen }) => {
	const { t } = useClientTranslation()
	const navItems = navigation(t)
	return (
		<nav className='flex justify-center items-center'>
			<ul className={clsx('flex items-center', listStyles)}>
				{navItems.map(({ value, href }, index) => (
					<li
						key={index}
						className='font-medium text-[16px] hover:text-[#5bdbfd] transition linear duration-[250ms]'
					>
						{type === 'burgerMenu' ? (
							<Link href={href} onClick={() => setIsBurgerMenuOpen(false)}>
								{value}
							</Link>
						) : (
							<Link href={href}>{value}</Link>
						)}
					</li>
				))}
			</ul>
		</nav>
	)
}

export default NavList
