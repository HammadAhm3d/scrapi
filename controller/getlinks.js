


var {PythonShell} = require('python-shell');


exports.scrape=async (req,res)=>{

  try{
    console.log(req.body)
    var options = {
      
      pythonOptions: ['-u'],
      args: req.body.inputt
      
    };
    

    PythonShell.run('controller\\google_scholar_links.py', options, function (err, results) {
      if (err) 
        throw err;
      
      console.log(results);
      res.json({links:results,success:true})
    });
}
catch(err){
  res.json({ message: error.message,success:false }); 
  console.log(err.message);
}

}