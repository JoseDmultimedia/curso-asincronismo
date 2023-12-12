import fetch from 'node-fetch';

const API = "https://api.escuelajs.co/api/v1";

function postData(urlAPi, data){
    const response = fetch(urlAPi, {
        method: 'POST',
        mode: 'cors',
        credential: 'dame-origin',
        headers:{
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)
    })
    return response;
}

const dataToPost = {
    "title": "New Product Course",
    "price": 99999999,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
  };

  postData(`${API}/products`, dataToPost)
  .then(response => response.json())
  .then(data => console.log(data))