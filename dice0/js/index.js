const template = Handlebars.compile("<li>You rolled a {{ value }}</li>");

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#roll').onclick = () => {
        const roll = Math.floor((Math.random() * 6) + 1);

        const content = template({"value": roll});
        document.querySelector('#rolls').innerHTML += content;
    }
});