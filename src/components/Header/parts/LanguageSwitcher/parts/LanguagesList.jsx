import LanguagesItem from './LanguagesItem'

const LanguagesList = ({ languages, i18n, setIsOpen }) => {
	return (
		<ul className='absolute top-[25px] left-0 mt-[10px] w-[80px] bg-[#1d0931] rounded z-[10]'>
			{languages.map((language, index) => (
				<LanguagesItem key={index} data={{ language, i18n, setIsOpen }} />
			))}
		</ul>
	)
}

export default LanguagesList
