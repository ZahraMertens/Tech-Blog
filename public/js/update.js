const updateBtn = document.getElementById('update-btn');
const deleteBtn = document.getElementById('delete-btn');

const updatePostHandler = async (event) => {
    event.preventDefault();

    console.log("success")

    // const title = document.querySelector("#update-title").value.trim();
    // const post_content = document.querySelector("#update-content").value.trim();
    // const post_id = console.log(window)
    
    // if (email && password){
    //     const res = await fetch("/api/posts/:id", {
    //         method: "DELETE",
    //         body: JSON.stringify({email, password}),
    //         headers: { 'Content-Type': 'application/json' },
    //     });

    //     console.log("success")

    //     if(res.ok){
    //         document.location.replace("/")
    //     } else {
    //         alert(res.error)
    //     }
    // }
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
            document.location.replace("/")
        } else {
            alert(res.error)
        } 
    }

    
}

deleteBtn.addEventListener("click", deletePostHandler);
updateBtn.addEventListener("click", updatePostHandler);

console.log("connected")