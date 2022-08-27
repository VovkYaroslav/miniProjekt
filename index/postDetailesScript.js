let post_id = window.location.search.split('?').join('')
const post = JSON.parse(localStorage.getItem('post'));
console.log(post);
document.querySelector('.postInfoTitle').innerText ='Post title: ' + post.title
document.querySelector('.postInfo__userId').innerText ='User ID: '+  post.userId
document.querySelector('.postInfo__id').innerText = 'Post ID: ' + post.id
document.querySelector('.postInfo__text').innerText = 'Post Text: ' + post.body

fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}/comments`).then(res=>res.json())
    .then(res=> res.map(item=>{
            const comment = document.createElement('div')
            comment.className='comments__comment'

            const commentName = document.createElement('p')
            commentName.innerText = item.name

            const commentBody =document.createElement('p')
            commentBody.innerText = item.body

            const commentEmail = document.createElement('p')
            commentEmail.innerText = item.email
            comment.append(commentName,commentBody,commentEmail)

            document.querySelector('.comments').appendChild(comment)
        }
    ))
