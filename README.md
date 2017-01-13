Chinese Club


## 安装部署

*不保证 Windows 系统的兼容性*

线上跑的是
[Node.js](https://nodejs.org) v4.4.0，
[MongoDB](https://www.mongodb.org) 是 v3.0.5，
[Redis](http://redis.io) 是 v3.0.3。

```
1. 安装 `Node.js/io.js[必须]` `MongoDB[必须]` `Redis[必须]`
2. 启动 MongoDB 和 Redis
3. `$ make install` 安装 Nodeclub 的依赖包
4. `cp config.default.js config.js` 请根据需要修改配置文件
5. `$ make test` 确保各项服务都正常
6. `$ node app.js`
7. visit `http://localhost:3000`
8. done!
```
```bash
$ make test
```

跑覆盖率测试

```bash
$ make test-cov
```
