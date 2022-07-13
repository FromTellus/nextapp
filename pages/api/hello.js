// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// fetch data from mongodbatlas
// https://docs.mongodb.com/manual/tutorial/query-data/

import { MongoClient } from "mongodb";

const mongodbUri = process.env.MONGODB_URI;

export default async function handler(req, res) {
  // const client = await MongoClient.connect(mongodbUri);
  // console.log("connected to mongodb");
  //   const db = client.db("products");
  //   const yourCollection = db.collection("products");
  //   const yourData = await yourCollection.find().toArray();
  //   console.log(yourData);
  //   client.close();
    res.status(200).json("yourData");
};

