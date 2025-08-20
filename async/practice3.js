// Task2
// Simulate 3 independent API calls: fetchNews(), fetchStocks(), fetchWeather()
// Each should resolve in a random time (1–3 seconds)
// Use Promise.all() to wait for all and return final combined result

const fetchNews = () => {

    const newsData = new Promise((resolve, reject) => {
        const news = {
            headline: "russia ukraine war",
            desc: "lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum"
        }
        setTimeout(() => {
            resolve(news)
        }, 2000);
    });
    return newsData;
}

const fetchStocks = () => {
    const stocksData = new Promise((resolve, reject) => {
        const stocks = {
            item: "philips trimmers",
            unit: 150,
            available: 100
        }
        setTimeout(() => {
            resolve(stocks)
        }, 2000);
    });
    return stocksData
}

const fetchWeather = () => {
    const weatherData = new Promise((resolve, reject) => {
            const weather = {
                loc: "kolkata",
                temp: 40,
                unit: "celcious",
                humidity: 83
            }

        setTimeout(() => {
            resolve(weather)
        }, 2000);
    });
    return weatherData;

}

const finalResult = async () => {
    const n = fetchNews();
    const s = fetchStocks();
    const w = fetchWeather();
    try {
        const result =  await Promise.all([n, s, w]);
        result.forEach((elem)=>{
            console.log(elem);
        });
    } catch (error) {
        console.log("something is wrong")
    }
}


finalResult()