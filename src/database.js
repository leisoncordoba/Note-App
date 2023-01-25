const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/notes-db-app',{
 
    useNewUrlParser: true,
  
   
    
})
.then(db=> console.log('DB is connected'))
.catch(err=>console.error(err));