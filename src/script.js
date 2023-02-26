if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(registration => {
      console.log("SW Registered!");
      console.log(registration);
    }).catch(error => {
      console.log("SW Registration Failed!");
      console.log(error);
    });
}

const nav = `
    <ul>
        <li><a href="/index.html">Home</a></li>
        <li><a href="/pages/about.html">About</a></li>
        <li><a href="/pages/author.html">Author</a></li>
    </ul>
`
document.getElementById('nav').innerHTML = nav;