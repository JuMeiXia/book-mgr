const mongoose = require('mongoose');

//给哪个数据库的哪个集合添加什么格式的文档

//Schema 映射了Mon下的一个集合，并且它的内容就是集合下文档的构成
//Modal 根据Schema审车藏得一套方法集合，这套方法用来操作MongoDB下的集合和集合下的文档

const UserSchema = new mongoose.Schema ({
   nickname:String,
   password:String,
   age:Number, 
});

const UserModal = mongoose.model('User',UserSchema);
const connect = () =>{
    //连接数据库
    mongoose.connect('mongodb://127.0.0.1:27017/book-mgr')

    //当数据库被打开的时候，输出连接成功
    mongoose.connection.on('open',() =>{
        console.log('连接成功');

        //创建文档
        const user = new UserModal({
            nickname:'小明',
            password:'123456',
            age:12, 
        });

        //保存，同步到MongoDB
        user.save();
    });
};

connect();