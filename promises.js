const posts = [
  { id: 1, title: "Helo World" },
  { id: 2, title: "Second post" },
]

function getPosts() {
  return new Promise((resolve, reject) => {
    console.log("get Post runs")
    setTimeout(function getPostsInner() {
      let output = ``
      for (let i = 0; i < posts.length; i++) {
        const post = posts[i]
        output += `<li>${post.title}</li>`
      }
      document.getElementById("demo").innerHTML = `<ul>${output}</ul>`

      const error = false

      if (!error) {
        resolve()
      } else {
        reject(`Something went wrong`)
      }
    }, 2000)
  })
}

function createPost(title) {
  return new Promise((resolve, reject) => {
    console.log("create Post runs")
    setTimeout(() => {
      posts.push({ id: posts.length, title })
    }, 2000)
    const error = true

    const data = { data: "some data" }

    if (!error) {
      resolve(data)
    } else {
      reject(`Something went wrong`)
    }
  })
}

function errorHandling(err) {
  console.log(err)
}

// const promise1 = new Promise((resolve)=>{resolve({data:"some data"})})
// const promise2 = 10
// const promise3 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         // resolve({data:"some more data"})
//         reject('123 error')
//     }, 2500);
// })

async function runThis() {
  let res = await createPost("Learning Js").catch(errorHandling)

  getPosts()
}

runThis()

// const result = Promise.all([promise1,promise2,promise3]).then(data=>{
//     console.log(data)
// })
