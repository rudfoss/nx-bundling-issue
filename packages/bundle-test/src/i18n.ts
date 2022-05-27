import i18n from "i18next"
import { initReactI18next } from "react-i18next"

i18n
	.use(initReactI18next)
	.init({
		fallbackLng: "en",
		load: "languageOnly",
		debug: true,
		defaultNS: "app",
		fallbackNS: ["form"],
		returnObjects: true,
		resources: {
			en: {
				app: {
					test: "From translations"
				}
			},
			nb: {
				app: {
					test: "Fra oversettelse"
				}
			}
		}
	})

export default i18n
