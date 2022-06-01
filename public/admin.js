// Your Code Here
async function main(url) {

    let response = await fetch(url)

    let books = await response.json()

    books.forEach(updateBook)
}

function updateBook(book) {
    let root = document.querySelector('#root')

    let li = document.createElement('li')
    li.textContent = book.title

    let quantity = document.createElement('input')
    quantity.value = book.quantity

    let Button = document.createElement('button')
    Button.textContent = 'Save'

    Button.addEventListener('click', () => {
        fetch('http://localhost:3001/updateBook', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: book.id,
                quantity: quantity.value
            })
        })
    })

    li.append(quantity, Button)

    root.append(li)
}

main('http://localhost:3001/listBooks');