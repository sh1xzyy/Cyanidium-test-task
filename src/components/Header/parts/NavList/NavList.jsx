import Link from 'next/link'
import { navigation } from './navigation'
import clsx from 'clsx'

const NavList = ({ listStyles, type, setIsBurgerMenuOpen }) => {
	return (
		<nav className='flex justify-center items-center'>
			<ul className={clsx('flex items-center', listStyles)}>
				{navigation.map(({ value, href }, index) => (
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
