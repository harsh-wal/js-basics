// function display(value) {
//   console.log(value);
// }

// function getSum(a, b, cb) {
//   const c = a + b;

//   cb(c);
// }

// getSum(1, 2, display); // console

// getSum(1, 2, function (value) {
//   console.log(value);
// }); // alert

// getSum(1, 2, (value) => {
//   console.log(value);
// }); // alert

// const array = [1, 2, 3, 4, 5];

// array.forEach((val) => {
//   console.log(val);
// });

// array.forEach(function (val) {
//   console.log(val);
// });

// // array.map();

// setTimeout(() => {
//   console.log('timeout');
// }, 100);

// promise js object async function

// function delayBy5(cb) {
//   setTimeout(cb, 5000);
// }

// delayBy5(()=>{});

function getData() {
  const promise = new Promise((resolve, reject) => {
    // process

    reject({ error: 'sasdfd' });
    resolve({ name: 'sd' });
  });

  return promise;
}

// // function getData() {
// //   // api call
// // }

// // getData();

const promise = getData(); // 1

promise.then((value) => {
  console.log(value); // 3
});

// console.log('something'); // 2
// // pending
// // fulfilled
// // rejected

// promise.catch((error) => {
//   console.log(error);
// });

// console.log(fetchPromise);

// fetchPromise.then((resp) => {
//   resp.json().then((data) => {
//     const f2 = fetch('sadfd');

//     f2.then((resp) => {
//       resp.json((data) => {

//         const f3 = fetch('sadfd');

//         f3.then((resp) => {
//           resp.json((data) => {

//           })
//         });

//       })
//     });
//   });
// });

// promise.finally()

// async function run() {
//   try {
//     const resp = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     const data = await resp.json();

//     const resp1 = await fetch('url');
//     const data1 = await resp1.json();

//     const resp1 = await fetch('url');
//     const data1 = await resp1.json();

//     console.log(data);
//   } catch (error) {
//     // retry
//     // log
//     console.log(error);
//   }
// }

// // run();

// async function getData() {
//   return { name: 'dsadf' };
// }

// getData().then((data) => {
//   console.log(data);
// });
// console.log(getData());
