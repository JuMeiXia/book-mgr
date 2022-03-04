//每个文件都是一个模块 需要module.export来导出使用
const Koa = require('koa');
const koaBody = require('koa-body');
const { connect } = require('./db');
const registerRoutes = require('./routers');
const cors = require('@koa/cors');

const app = new Koa();

connect().then(() =>{
        app.use(cors());
        app.use(koaBody());
        
        registerRoutes(app);

        //通过app.use注册中间件
        //中间件本质上就是一个函数
        
        app.listen(3000,() =>{
            console.log('启动成功');
    });
});