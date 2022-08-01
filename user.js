const postListElement = document.querySelector('.post-list');

async function main() {
  const id = localStorage.getItem("id");
  const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  const postsData = await posts.json();
  postListElement.innerHTML = postsData.map(post => postsHTML(post)).join("");
}

main();

function postsHTML(post) {
  return `<div class="post">
    <div class="post__title">
      ${post.title}
    </div>
    <p class="post__body">
      ${post.body}
    </p>
  </div>`
}