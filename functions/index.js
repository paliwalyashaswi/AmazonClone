const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")
('sk_test_51MIqGcSCEbemH5XhuVlHNKSjMMR1B8Gt1J3jIo1gSo0mLxMTd5CHAKfKv3T3uBkxH3L7Lu7x4nWZO2800zc0vxux00XY9s3u0R')


//- App config
const app = express();

//-Middleware
app.use(cors({origin: true}));
app.use(express.json());

//API routes
app.get('/',(request, response)=> response.status(200).send('hello world'))
app.post('/payments/create', async (request, response)=>{
    const total = request.query.total;

    console.log('Payment req received', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "INR",
        metadata: { integration_check: "accept_a_payment" },
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
        
    })
})
// - Listen Command
exports.api = functions.https.onRequest(app)
//http://127.0.0.1:5001/clone-eb6e7/us-central1/api