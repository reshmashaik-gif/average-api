const express = require("express")
const port = 8003
/**
 * Stores all the valid numbers received by the API.
 */
const numbers = []
const app = express()
/**
 * Parses incoming JSON request bodies.
 */
app.use(express.json())
/**
 * Calculates the average of all numbers received so far.
 *
 * @route POST /average
 * @param {number} req.body.number - Number to add to the collection.
 * @returns {Object} The current average.
 * @throws {400} If the request contains an invalid number.
 * @throws {500} If an unexpected server error occurs.
 */
app.post("/average",(req,res)=>{
    try{
        const body = req.body
    if(typeof body.number === "number" && Number.isFinite(body.number)){
        numbers.push(body.number)
        const sum = numbers.reduce((acc,val)=>{
            return acc+val
        },0)
        const avg = sum/numbers.length
        return res.status(200).json({average:avg})
    }
    
    else{
        return res.status(400).json({request:"bad request"})
    }
    }catch(err){
        console.log(err)
        return res.status(500).json({message:"server error"})
    }
})


if (require.main === module){
    app.listen(port,()=>{
    console.log("server started")
})
}

module.exports = app