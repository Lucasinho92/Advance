const axios = require('axios')
axios.get('/user?ID=12345')
.then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.log(error);
})
.then(function () {

});