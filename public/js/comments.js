
const addCommentHandler = async (event) =>{
    event.preventDefault();

    if(event.target.hasAttribute('data-id')){

        const post_id = event.target.getAttribute('data-id');
        const comment_content = document.querySelector('#content-comment').value.trim();
  
        console.log(comment_content)
        console.log(post_id)

        if (post_id && comment_content) {
        const res = await fetch('/api/comments/create', {
            method: 'POST',
            body: JSON.stringify({ post_id, comment_content }),
            headers: { 'Content-Type': 'application/json' },
        });
    
            if (res.ok) {
                console.log("ok")
                document.location.reload()
            } else {
                alert(response.statusText);
            }
        }
    }
}

document.querySelector('.btn-add-comment').addEventListener("click", addCommentHandler)