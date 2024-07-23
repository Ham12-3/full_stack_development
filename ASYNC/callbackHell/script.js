// Nested timeout functions 

const task1=(callback) => {
    setTimeout(()=> {
        console.log("task 1  completed")

        myCallbackFn()
    },3000)
}

const task2     = (callback) => {
    setTimeout(()=> {
        console.log("task 2 completed")
        callback()
    },2000)
}

const task3     = (callback) => {
    setTimeout(()=> {
        console.log("task 3 completed")
        callback()
    },1000)
}

task1()

// Start the first task 

task1(function() {
    // Once the first is completed start the second one 

    task2(function() {
// Once the escond is completed start the third task 
task3(function() {

    console.log("All tasks are completed")
}
)

    })
})

// Fecth user data (dummy) 

const userData = {id:1, name:"Agnes Appia "}

const userPosts =[
    {userId:1, id:1, title:"Post 1"},
    {userId:1, id:2, title:"Post 2"}
]

const postCommennts =[
    {postId:1, id:1, body:"Comment 1"},
    {postId:1, id:2, body:"Comment 2"},
]

// Fetch user data 

const fetchUserData = (id, callback) => {
    console.log("Fetching user data ")
    setTimeout(()=> {
        callback(userData)
    },1000)
}

// Fecth usser post 

const fetchUserPosts = (userId, callback) => {
    console.log("Fetching user posts")
    setTimeout(()=> {
        callback(userPosts)
    },1000)
}

// Fecth post comments 

const fetchPostComments = (postId, callback) => {
    console.log("Fetching post comments")
    setTimeout(()=> {
        callback(postCommennts)
    },1000)
}

// initiate the process 
fetchUserData(1,function(userData) {
    console.log(userData)
    fetchUserPosts(1, function(userPosts) {
        console.log(userPosts)
        userPosts.forEach(post => {
            fetchPostComments(post.id, function(postComments) {
                console.log(postComments)
            })
        })

    })
})
