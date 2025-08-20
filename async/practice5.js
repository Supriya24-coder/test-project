// Task5
// Create a function fetchDataWithTimeout(apiFn, timeout)
// If apiFn takes too long, reject with "Timeout"
// Use Promise.race() to race between data fetch and timeout

function fetchDataWithTimeout(apiFn,timeout){
    const timeOutTask = new Promise((_,reject)=>{
        setTimeout(()=>{
            reject(new Error("api time out"))
        },timeout)
    });

    return Promise.race([apiFn(),timeOutTask]);
}

function delayApi(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Data fethced successfully")
        }, 2000);
    });
}

fetchDataWithTimeout(delayApi,3000)
.then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err.message);
})