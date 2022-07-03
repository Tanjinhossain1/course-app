const express = require('express')
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json())





const uri = "mongodb+srv://outhshad-digital-media:RbYQZE55c4R9LLQ3@cluster0.vz35n.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        const courseCollection = client.db("courses").collection("data");
        // course detail
        app.get('/coursesDetail',async(req,res)=>{
            const course = await courseCollection.find().toArray();
            res.send(course)
        })
    }
    finally { }
}

run().catch(console.dir())


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})