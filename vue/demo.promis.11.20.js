var promise = new Promise(function (resolve, reject) {
  if (1) {
    //同步任务从上到下按顺序执行，
    //异步任务从上到下按顺序执行，
    console.log('1');
    resolve('value');
    console.log('2');
  } else {
    reject('erro');
  }
  console.log('3');
})

var timeOut = setTimeout(() => {
  console.log(5);
}, 1);
//Promise比settimeOut先执行
promise.then((res) => {
  console.log(6, res);
})

console.log(4);


// promise.catch((res)=>{
//     console.log(res);
// })


const getJSON = function (url) {
  const promise = new Promise(function (resolve, reject) {
    const handler = function () {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    const client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();

  });

  return promise;
};

getJSON("/posts.json").then(function (json) {
  console.log('Contents: ' + json);
}, function (error) {
  console.error('出错了', error);
});

getJSON("/post/1.json").then(function (post) {
  return getJSON(post.commentURL);
}).then(function (comments) {
  console.log("resolved: ", comments);
}, function (err) {
  console.log("rejected: ", err);
});