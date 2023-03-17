//your JS code here. If required.
const output = document.querySelector(`#output`);
function getData() {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Hello, world!`);
    }, 1000);
  });
  return myPromise;
}

getData().then((res) => {
  //   console.log(res);
  output.innerHTML = res;
});
