import AMap from 'AMap'
new AMap.Map('container')

export const getPlugin = (pluginName, options) => {
	return new Promise((resolve, reject) => {
		AMap.plugin(pluginName, () => {
			const Oplugins = new AMap[(pluginName.split('.'))[1]]({
				...options
			})
			resolve(Oplugins)
			reject
		})
	})
}
