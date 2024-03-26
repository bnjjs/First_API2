import  express from 'express';
import  cors from 'cors';
import { GetRangeNotes, GetIdNotes, AddNotes, response, triche} from './model/Supabase.js';
const app = express();
const port = 3000

app.use(cors())
app.use(express.json())

app.get('/v1', async (req, res)=>{
    const  data = await GetRangeNotes()
    res.json(data)
})
app.get('/v2', async (req, res)=>{
    const ids = req.query.id
    const  data= await GetIdNotes(ids)
    res.json(data.data[0].noms)
})

app.post('/v3', async (req, res) => {
    const {data, error} = await response(req.body)
    return res.json(data)
});

app.post('/v4', async (req, res) => {
    const {data, error} = await triche(req.body)
    return res.json(data)
});

app.post('/v5', async (req, res) => {
    const {data, error} = await AddNotes(req.body)
    return res.json(data[0])
});



app.listen(port,()=>{
    console.log(`l'application est lié sur le port ${port}`)
})