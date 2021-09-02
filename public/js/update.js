const updateBtn = document.getElementById('update-btn');
const deleteBtn = document.getElementById('delete-btn');

const updatePostHandler = async (event) => {
    event.preventDefault();

    if(event.target.hasAttribute('data-id')){

        const post_id = event.target.getAttribute('data-id');
        const title = document.querySelector("#update-title").value.trim();
        const post_content = document.querySelector("#update-content").value.trim();
        
        if (title && post_content){
            const res = await fetch(`/api/posts/${post_id}`, {
                method: "PUT",
                body: JSON.stringify({title, post_content}),
                headers: { 'Content-Type': 'application/json' },
            });

            if(res.ok){
                //alert("Your blog post has successfuly been updated!")
                document.location.replace(`/dashboard`)
            } else {
                alert(res.error)
            }
        }
    }
}

const deletePostHandler = async (event) => {
    event.preventDefault();

    if(event.target.hasAttribute('data-id')){

       const post_id = event.target.getAttribute('data-id');

      console.log(post_id)

      const res = await fetch(`/api/posts/${post_id}`, {
        method: "DELETE",
        });
    
        console.log("success")
    
        if(res.ok){
            //alert("Your blog post has successfuly been deleted!")
            document.location.replace("/dashboard")
        } else {
            alert(res.error)
        } 
    }

    
}

deleteBtn.addEventListener("click", deletePostHandler);
updateBtn.addEventListener("click", updatePostHandler);