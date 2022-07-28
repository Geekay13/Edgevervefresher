var http=require('http');
var fs= require('fs');
var formidable = require('formidable');

http.createServer(function(req,res)
{
    if(req.url=='/')
    {
        res.writeHead(200,{'content-Type':'text/html'});
        res.write('<form action ="biodata" method="post" enctype="multipart/form-data">');
        res.write('<h1>ganesh rv </h1>');
        res.write('Name <input type="text" name="username"><br>');
        res.write('DOB <input type="date" name="dob"><br>');
        res.write('Email <input type="emaiil" name="email"><br>');
        res.write('Phone <input type="text" name="phone"><br>'); 
        res.write('Upload your Resume <input type="file" name="uploadfile"><br>'); 
        res.write('<input type="submit">'); 
        res.end();
    }else if(req.url =='/biodata')
    {
        var form = new formidable.IncomingForm();
        form.parse(req,function(err,fields,files){
            res.write('<h1>Name: '+fields.username+'</h1><br>');
            res.write('<h1>Dob: '+fields.dob+'</h1><br>');
            res.write('<h1>qualification: '+fields.qualification+'</h1><br>');
            res.write('<h1>email: '+fields.email+'</h1><br>');
            res.write('<h1>phone: '+fields.phone+'</h1><br>');

            var oldpath = files.uploadfile.path; 
            var newpath='D:\fw'+files.uploadfile.name;
            fs.rename(oldpath,newpath,function(err){
                {
                    if(err) throw err;
                    res.write('<h1>your file location</h1><br>');
                    res.write('<h1>old path : '+oldpath+'</h1><br>');
                    res.write('<h1>new path : '+newpath+'</h1><br>');
                    res.end("<h2>tks for your interest</h2>");
                }
            });
        });
    }
else{
    res.end('<h2>page not found</h2>');
}

}).listen(8080);