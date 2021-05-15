import {connectToDatabase} from "../../../util/mongodb/mongodb"
import {ObjectId} from "mongodb"
import {errorApi} from "../../../util/api/error"
const nameCollection = 'currencies'
export default async function currencies(req, res) {
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
                await get(req, res, client)
                return
            case 'POST':
                await post(req, res, client)
                return
            case 'PUT':
                await put(req, res, client)
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

async function get(req, res, client) {
    const currencies = await client.db(process.env.DATABASE_NAME).collection(nameCollection).find().toArray()
    if (!currencies)
    {
        errorApi(req, res)
        return
    }

    res.status(200).json(JSON.stringify({
        type: 'ok',
        result: currencies
    }))
}

async function post(req, res, client) {
    const {name} = req.body

    if (!name) {
        errorApi(req, res)
        return
    }

    const availabilityCurrency = await client.db(process.env.DATABASE_NAME).collection(nameCollection).findOne({'name' : name})

    if (!availabilityCurrency) {
        await client.db(process.env.DATABASE_NAME).collection(nameCollection).insert({name})
        res.status(200).json(JSON.stringify({
            type: 'ok',
            result: 'added'
        }))
        return
    }

    res.status(200).json(JSON.stringify({
        type: 'ok',
        result: 'has already'
    }))
}

async function put(req, res, client) {
    const {_id, name} = req.body
    if (!_id) {
        errorApi(req, res)
        return
    }
    const availabilityCurrency = await client.db(process.env.DATABASE_NAME).collection(nameCollection).findOne({'_id' : ObjectId(_id)})
    if (!availabilityCurrency) {
        errorApi(req, res)
        return
    }

    const {lastErrorObject} = await client.db(process.env.DATABASE_NAME).collection(nameCollection).findOneAndUpdate(
        {'_id' : ObjectId(_id)},
        {$set: {'name': name}})

    if(lastErrorObject.updatedExisting === false)
    {
        errorApi(req,res)
        return
    }

    res.status(200).json(JSON.stringify({
        type: 'ok',
        result: 'updated'
    }))
}