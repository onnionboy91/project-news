const updateForm = document.querySelector('.update-comment-form')

if (updateForm) {
    updateForm.addEventListener('submit', async (e)=>{
        
        e.preventDefault()
        const {comment} = e.target
        const {id, newsid} = e.target.dataset
        console.log(e.target.dataset);
        // if (comment==='') {
        //     alert('Слыш, напиши чёнить,Э!')
        //     return
        // }
        const res =await fetch(`/api/comments/${id}`, {
            method: 'put',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                comment: comment.value
            })
        })
        const data = await res.json()
        if(data.message==='success') {
            window.location.assign(`/${newsid}`)
        } else {
            alert(data.message,'script update')
        }
    })
}