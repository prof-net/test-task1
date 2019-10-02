class GetDataServer {

    getService = async (url) => {
        const res = await fetch(url)

        if (!res.ok) {
            throw new Error(`Не корректный URL: ${url}, статус ошибки: ${res.status} `)
        }

        return res.json()
    }

    getData = async () => {
        const body = await this.getService('https://www.mocky.io/v2/5d944b9f2f00006b008ff619')
        return body.data
    }
}

export default GetDataServer