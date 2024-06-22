async function fetchData() {
    console.log('Promisse 1 triggerd')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched From 1st Promise');
        }, 1000);
    });
}

async function fetchData2() {
    console.log('Promisse 2  triggerd')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched from 2nd Promise');
        }, 1000);
    });
}


// async function getData() {
//     try {
//         const result = await fetchData();
//         console.log(result); // Output: Data fetched
//     } catch (error) {
//         console.error(error);
//     }
// }

//getData();

fetchData().then((data)=>console.log(data)).then(fetchData2).then((data)=>console.log(data))

//fetchData2().then((data)=>console.log(data))
