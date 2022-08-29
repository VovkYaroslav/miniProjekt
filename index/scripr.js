// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
const users = fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
    .then(res => res.map(item => {

        const user = document.createElement('div')
        user.className = 'users__user'

        const userId = document.createElement('p')
        userId.className = 'users__user-id'
        userId.innerText ='ID: '+ item.id

        const userName = document.createElement('p')
        userName.className = 'users__user-name'
        userName.innerText ='Name: '+ item.name

        // 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
        const userLink = document.createElement('a')
        userLink.setAttribute('href',`user-detailes.html${JSON.stringify(item.id)}`)
        userLink.innerText = 'User Detailes'

        user.append(userId,userName,userLink)
        usersBlock.appendChild(user)
    }))

//2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
const usersBlock = document.createElement('div')
usersBlock.className = 'users'

document.body.appendChild(usersBlock)