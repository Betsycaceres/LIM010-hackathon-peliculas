const app = {
  showAllMovieSerie: (url, arrayData) => {
    const objPelis = [];
    for (let i = 0; i < arrayData.length; i++) {
      let url_pelis = url + arrayData[i] + '&apikey=4c2bc917'
      fetch(url_pelis)
        .then(response => response.json())
        .then(data => {
          localStorage.setItem('data', JSON.stringify(data))
          objPelis.push(data);
          createTemplateCard(objPelis)
          return objPelis;
        })
        .catch(err => (err))
    }
  },
};

const apps = {
  showAllMovieSeries: (url, arrayData) => {
    const objPelis = [];
    for (let i = 0; i < arrayData.length; i++) {
      let url_pelis = url + arrayData[i] + '&apikey=4c2bc917'
      fetch(url_pelis)
        .then(response => response.json())
        .then(data => {
          localStorage.setItem('data', JSON.stringify(data))
          objPelis.push(data);
          createTemplateCardSeries(objPelis)
          return objPelis;
        })
        .catch(err => (err))
    }
  },
};
window.app = app;
window.apps = apps;