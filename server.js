let http = require('http');

let users = [
    { id: 1, name: '曾小贤' },
    { id: 2, name: '赵丽颖' },
    { id: 3, name: '胡一菲' },
    { id: 4, name: '关谷神奇' },
    { id: 5, name: '吕子乔' },
    { id: 6, name: '张伟' },
];

let server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url === '/api/users') {
        res.end(JSON.stringify(users));
    } else {
        res.end('Not Found');
    }
});

server.listen(8083, () => {
    console.log('后端API接口服务器已经启动在8083端口上了');
});
