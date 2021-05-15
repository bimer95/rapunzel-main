import {connectToDatabase} from "../../../util/mongodb/mongodb";
import {errorApi} from "../../../util/api/error";
const nameCollection = 'companies'

export default async function companies(req, res) {
    try {
        const {client} = await connectToDatabase()
        const isConnected = await client.isConnected()
        if (isConnected === false)
        {
            errorApi(req, res)
            return
        }
        switch (req.method) {
            case 'GET':
                await getCompanies(req, res, client)
                return
            default:
                errorApi(req, res)
                return
        }
    }
    catch (e) {
        errorApi(req, res)
    }
}

async function getCompanies(req, res, client) {
    const fields = req.query.fields ?? 'all'
    const count = parseInt(req.query.count) ?? 0
    const company = {};
    if (fields !== 'all'){
        const arrFields = fields.split(',')
        arrFields.forEach(val => {
            company[val] = true
        })
    }
    if (isNaN(count))
    {
        errorApi(req, res)
        return
    }
    const companies = await client.db(process.env.DATABASE_NAME).collection(nameCollection).find().limit(count).project(company).toArray()
    res.status(200).json(JSON.stringify({
        type: 'ok',
        result: companies
    }))
}

