// Write your code here!
function displayPosts(posts) {
    const postList = document.getElementById("post-list");

    const selectedPosts = [posts[0]];

    const shuffled = posts.slice(1).sort(() => Math.random() - 0.5);

    selectedPosts.push(...shuffled.slice(0, 5));

    selectedPosts.forEach(post => {

        const li = document.createElement("li");

        const h1 = document.createElement("h1");
        h1.textContent = post.title;

        const p = document.createElement("p");
        p.textContent = post.body;

        li.appendChild(h1);
        li.appendChild(p);

        postList.appendChild(li);
    });
}

async function fetchPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const posts = await response.json();
        displayPosts(posts);
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}

document.addEventListener("DOMContentLoaded", fetchPosts);