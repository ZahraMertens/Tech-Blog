const renderPostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title-post').value.trim();
    const post_content = document.querySelector('#content-post').value.trim();
  
    if (title && post_content) {
      const res = await fetch('/api/posts/create', {
        method: 'POST',
        body: JSON.stringify({ title, post_content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (res.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
}

document.querySelector('.post-form').addEventListener("submit", renderPostHandler);