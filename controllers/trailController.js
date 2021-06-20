let data = require("../data");



exports.trailList = async(req, res) => {
try {
const trails = await trail.findAll()    
res.json(trails)
} catch (error) {
    res.status(500).json({msg: error.msg})
}
}




  exports.trailCreate = async(req, res) => {
try {
    const newTrail= await trail.create(req.body)
    res.status(201).json(newTrail)
} catch (error) {
     res.status(500).json({msg: "not found"})
}


    // req.body.id = data[data.length - 1].id + 1;
    //   req.body.slug =  req.body.name.toLowerCase().replace(/ /gi, "-");
    // data.push(req.body);
    // res.status(201).json(req.body);
  };



  exports.trailDelete = (req,res)=>{
    const reqTrail=data.find((trail)=>trail.id === +req.params.trailId);
    if (reqTrail){
        data = data.filter((trail)=>trail.id !== +req.params.trailId)
        res.status(204).end();
    }else {
        res.status(404).json({msg:"This trip doesn't exist" })
    }
}





