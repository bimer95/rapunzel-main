import {connectToDatabase} from "../../../util/mongodb/mongodb"
import {errorApi} from "../../../util/api/error"
import {ObjectId} from "mongodb"
const nameCollection = 'cities'
export default async function cities(req, res) {
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
                await getCities(req, res, client)
                return
            case 'POST':
                await postCities(req, res, client)
                return
            case 'PUT':
                await putCities(req, res, client)
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

async function getCities(req, res, client) {
    const cities = await client.db(process.env.DATABASE_NAME).collection(nameCollection).find().toArray()
    if (!cities)
    {
        errorApi(req, res)
        return
    }

    res.status(200).json(JSON.stringify({
        type: 'ok',
        result: cities
    }))
}

async function postCities(req, res, client) {
    const {city} = req.body

    if (!city) {
        errorApi(req, res)
        return
    }

    const availabilityCity = await client.db(process.env.DATABASE_NAME).collection(nameCollection).findOne({'city' : city})

    if (!availabilityCity) {
        await client.db(process.env.DATABASE_NAME).collection(nameCollection).insert({city})
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

async function putCities(req, res, client){
    const {_id, city} = req.body

    if (!_id) {
        errorApi(req, res)
        return
    }

    const availabilityCity = await client.db(process.env.DATABASE_NAME).collection(nameCollection).findOne({'_id' : ObjectId(_id)})

    if (!availabilityCity) {
        errorApi(req, res)
        return
    }

    const {lastErrorObject} = await client.db(process.env.DATABASE_NAME).collection(nameCollection).findOneAndUpdate(
        {'_id' : ObjectId(_id)},
        {$set: {'city': city}})

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