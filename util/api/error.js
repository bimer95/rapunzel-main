export function errorApi(req, res) {
    res.status(500).json(JSON.stringify({
        type: 'server error'
    }))
}