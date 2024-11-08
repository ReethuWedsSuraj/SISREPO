const mongooose = require('mongoose');

mongooose.connect('mongodb://localhost:27017/myuserdatabase',
{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('connection success');
}).catch((error)=>{
    console.log('not connected',error);
})