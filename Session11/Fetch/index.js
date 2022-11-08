function getData(){
  fetcg('http://reqres.in/api/users').then((response) => {
    return response.json();
  }).then((data) => {
    console.log(data);
  })
  }
  getData();