//const axios = require('axios');

const onButtonClick = function() {
    let box = document.getElementById('main');
    box.style.backgroundColor = 'blue';
}


const tryGet = () => {
    try {
        return axios.get('https://jacobmru.github.io/oncall/listFile.json')
        .then(function (response){
            console.log(response.data.items)
        })
    } catch (error) {
        console.error(error)
    }
}

document.getElementById("myButton").addEventListener('click', tryGet);