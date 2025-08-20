// Task4
// Simulate a queue of tasks: ['task1', 'task2', 'task3']
// Write an async processTask(task) function that waits 1 second and logs task
// Process them one by one using for...of and await

// const tasks = ["task1","task2","task3"];



// // console.log(taskList)
// const taskHandler = async(taskList)=>{
// const taskLists = taskList.map((task)=>{
//     setTimeout(()=>{
//         Promise.resolve(task)
//     },1000)
    
// })
// return taskLists
// }

// console.log(taskHandler(tasks));



const tasks = ['task-1', 'task-2', 'task-3',"task-4","task-5"];



function waiting(ms){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve()
    },ms)
  })
}


async function processTask(task) {
  await waiting(2000);
  console.log(`Processed ${task}`)
}


async function taskQueue(taskList){
  for(const task of taskList){
    await processTask(task)
  }
}

taskQueue(tasks)
