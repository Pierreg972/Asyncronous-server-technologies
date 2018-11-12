// Necessary imports
module.exports = {
    serverHandle: function (req, res) {
        const url = require('url')
        const qs = require('querystring')
        const route = url.parse(req.url)
        const path = route.pathname
        const params = qs.parse(route.query)

        res.writeHead(200, {'Content-Type': 'text/plain'});

        if (path === '/hello') {
            if('name' in params){
                if(params['name'] === 'pierre'){
                    res.write('Hello ' + params['name'] + "\nWelcome to your own dedicated page !" +
                        "\nYear : ING5" +
                        "\nGroup : BDA Grp 01" +
                        "\nSports : tennis, squash, swimming")
                } else{
                    res.write('Hello ' + params['name'])
                }
            } else{
                res.write('Hello anonymous')
            }
            res.end()
        }
        if(path === '/'){
            res.write('Here is an explanation of what is doable on this site :\n' +
                "- localhost:8080/ redirects you to this explanation\n" +
                "- localhost:8080/hello prints 'Hello anonymous'\n" +
                "- localhost:8080/hello?name=pierre prints some infos about the author\n" +
                "- localhost:8080/hello?name=... prints 'Hello ...' if what follows name= is not pierre" )
            res.end()
        }
        else{
            res.end('404 - Not found !')
        }
    }
}