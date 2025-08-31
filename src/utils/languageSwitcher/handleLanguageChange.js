export const handleLanguageChange = (i18n, newLocale, setIsOpen) => {
	i18n.changeLanguage(newLocale)
	setIsOpen(false)
}
