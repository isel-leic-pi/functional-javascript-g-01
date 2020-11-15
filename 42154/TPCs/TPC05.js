'use strict'
const http = require('http')

function sumBodiesLength(urls){
    let sum = 0;
    urls.forEach(element => {
        http.get(element, (response)=>{
            let error
            if(response != 200)
                error = new Error('Request failed')

            response.setEncoding('utf-8')
            var stream = response.body
            sum += stream.length
        });

    }

)}
