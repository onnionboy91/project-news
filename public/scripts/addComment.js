const addForm = document.querySelector('.comment-form')

if(addForm) {
    addForm.addEventListener('submit', async (e)=> {
        e.preventDefault()
        const {comment} = e.target
        if (comment==='') {
            alert('Слыш, напиши чёнить,Э!')
            return
        }
        const {id} = e.target.dataset
        const res = await fetch('api/comments', {
            method:'post',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                comment:comment.value,
                newsId: id
            })
        })
        const data = await res.json()
        if (data.message === 'success') {
            document.querySelector('.all-comment').insertAdjacentHTML('beforeend', data.html)
            e.target.reset()
        } else {
            alert(data.message)
        }

    })
}