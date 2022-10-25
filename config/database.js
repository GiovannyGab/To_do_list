const mongoose = require('mongoose')
mongoose.Promise = global.Promise

mongoose.connect('mongodb+srv://giovannyG:gaga123@todo-list-cluster.wm2cwov.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser:true,useUnifiedTopology:true})
.then(()=> console.log('conectando ao MongoDB'))
.catch((err)=>console.log(err)) 