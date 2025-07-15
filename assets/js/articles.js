document.addEventListener("DOMContentLoaded", () => {

    let articles = document.querySelector(".layout__articles");

    let posts = [
        {
            title: "Articulos 1",
            date:"11/08/2025",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores pariatur voluptatibus voluptas fuga quam corrupti tenetur, reprehenderit facilis laudantium, quis quas recusandae earum magni provident alias vero iusto necessitatibus sequi."
        },
        {
            title: "Articulos 2",
            date:"15/09/2025",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores pariatur voluptatibus voluptas fuga quam corrupti tenetur, reprehenderit facilis laudantium, quis quas recusandae earum magni provident alias vero iusto necessitatibus sequi."
        },
        {
            title: "Articulos 3",
            date:"10/01/2025",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores pariatur voluptatibus voluptas fuga quam corrupti tenetur, reprehenderit facilis laudantium, quis quas recusandae earum magni provident alias vero iusto necessitatibus sequi."
        },
        {
            title: "Articulos 4",
            date:"11/08/2025",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores pariatur voluptatibus voluptas fuga quam corrupti tenetur, reprehenderit facilis laudantium, quis quas recusandae earum magni provident alias vero iusto necessitatibus sequi."
        }

    ];

    posts.forEach(article => {
        articles.innerHTML += `
            <article class="articles__article">
                <h3 class="article__title">${article.title}</h3>
            
                <span class="article__date">${article.date}</span>
                <p class="article__body">
                        ${article.body}
                </p>

                <a href="#" class="article__btn">Leer mas</a>
                </article>
        `;
    });
});