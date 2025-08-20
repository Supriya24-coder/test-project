// Task 1
// Create 3 functions: fetchUser(), fetchOrders(userId), fetchOrderDetails(orderId)
// Use setTimeout() in each to simulate delay (1–2 seconds)
// Chain them using async/await to get user → orders → order details
// Log output step-by-step

// function fetchUser(nm){
//     console.log(`${nm}'s profile is fetching...`);
// setTimeout(()=>{
//     console.log(`${nm} successfully fetched!!`);
// },2000);
// }

// function fetchOrders(uId){
//     setTimeout(()=>{
//         console.log(`now fetching orders of ${uId}`);
//     },2000);
// }

// function fetchOrderDetails(oId){
//     setTimeout(()=>{
//     console.log(`all order fetched successfully`);
//     setTimeout(()=>{
//         console.log(`fetching order details of ${oId}....`);
//     },2000);
// },5000);
// }

// async function orderController(cName,cId,OId){
//    fetchUser(cName)
//    fetchOrders(cId)
//    fetchOrderDetails(OId)
// }

// orderController("rohan", "user123", 786513223564564561548)



const userObj = {
    userId: "rohan12345",
    userName:"Rohan sarkar",
    avtive:true,
    orders:[
        {
            orderId:123456789,
            orderItem: "nike shoe"
        },
          {
            orderId:234567890,
            orderItem: "apple macbook"
        },
          {
            orderId:3456789012,
            orderItem: "iphone 16"
        },
    ]

}

 function fetchUser(customer) {
    const fetchPromise = new Promise((resolve, reject) => {
        console.log(`${customer.userName}'s profile is fetching...`);
        setTimeout(() => {
            console.log(`${customer.userName} successfully fetched!!`);
        }, 2000);
        resolve(customer.userId)
    })
    return fetchPromise;
}

 function fetchOrders(uId,customer) {
    const fetchOrder = new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(`now fetching orders of ${uId}`);
            callOrders();
        }, 2000);
        function callOrders(){
            const {orders} = customer;
            resolve(orders)
        }
    });
    return fetchOrder
}

 function fetchOrderDetails(oId,customer) {
    const fetchOrder = new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(`all order fetched successfully`);
            setTimeout(() => {
                console.log(`fetching order details of ${oId}....`);
                allOrder()
            }, 2000);
        }, 5000);
        function allOrder(){
            const products = customer.orders.map((v)=>{
                return (`Product id: ${v.orderId} and Product is ${v.orderItem}\n`)
            }).toString()
            resolve(products)
        }
    });
    return fetchOrder;
}

async function orderController(user) {
    const userProfile = await fetchUser(user)
    console.log(`welcome ${userProfile}`)
    const userOrder = await fetchOrders(userProfile, user)
    console.log(`Products ordered by ${userProfile}:-`,userOrder.map((item)=>item.orderItem).join(","));

    const orderDetail = await fetchOrderDetails(userOrder.map((item)=>item.orderId).join(" "),user);
    console.log(orderDetail);
}

orderController(userObj)







