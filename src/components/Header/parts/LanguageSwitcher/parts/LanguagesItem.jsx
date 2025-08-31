import { handleLanguageChange } from '@/utils/languageSwitcher/handleLanguageChange'

const LanguagesItem = ({ data: { language, i18n, setIsOpen } }) => {
	return (
		<li
			key={language.code}
			className='px-3 py-2 hover:bg-[#155668] cursor-pointer transition linear duration-[250ms]'
			onClick={() => handleLanguageChange(i18n, language.code, setIsOpen)}
		>
			{language.name}
		</li>
	)
}

export default LanguagesItem
