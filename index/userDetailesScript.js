let user_id = window.location.search.split('?').join('');
fetch(`https://jsonplaceholder.typicode.com/users/${user_id}/posts`).then(response => response.json())
fetch(`https://jsonplaceholder.typicode.com/users/${user_id}`).then(response => response.json())
    .then(res => {
        document.querySelector('.userInfo__name').innerText = res.name
        document.querySelector('.userInfo__userName').innerText = res.username
        document.querySelector('.userInfo__email').innerText = res.email;
        document.querySelector('.userInfo__website').innerText = res.website
        document.querySelector('.userInfo__phone').innerText = res.phone
        document.querySelector('.userAddress__street').innerText = res.address.street
        document.querySelector('.userAddress__suite').innerText = res.address.suite
        document.querySelector('.userAddress__city').innerText = res.address.city
        document.querySelector('.userAddress__zipcode').innerText = res.address.zipcode
        document.querySelector('.userAddress__geo').innerText = `${res.address.geo.lat} ${res.address.geo.lng}`;
        document.querySelector('.userCompany__catchPhrase').innerText = res.company.catchPhrase
        document.querySelector('.userCompany__bs').innerText = res.company.bs
    })

document.querySelector('.getComments').addEventListener('click', () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${user_id}/posts`).then(response => response.json())
        .then(res => {
                const posts = document.createElement('div')
                posts.className = 'posts'

                res.map(item => {
                    const post = document.createElement('div')
                    post.className = 'post'

                    const postBody= document.createElement('p')
                    postBody.innerText = item.body

                    const postTitle = document.createElement('h2')
                    postTitle.innerText = item.title

                    const link = document.createElement('a')
                    link.setAttribute('href', `post-detailes.html?${item.id}`)
                    link.innerText = 'go to post details'
                    link.addEventListener("click", ()=>{
                        console.log(item.id)
                        console.log(item)
                        localStorage.removeItem('post')
                        localStorage.setItem('post',JSON.stringify(item))

                    })
                    post.append(postTitle, postBody, link)
                    posts.appendChild(post)
                })
                document.querySelector('.user').appendChild(posts)
                document.querySelector('.getComments').disabled = true
                console.log(res);
            }
        );
})