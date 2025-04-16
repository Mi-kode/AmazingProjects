document.getElementsByTagName('form')[0].addEventListener("submit", function(e) {
    e.preventDefault(); // stop the normal form behavior
        const search= document.getElementById("search").value;
        if (search) {
            window.location.hash = search;
        }
});