const template = Handlebars.compile(document.querySelector('#result').innerHTML);

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#roll').onclick = () => {
        const roll = Math.floor((Math.random() * 6) + 1);

        const content = template({"value": roll});
        document.querySelector('#rolls').innerHTML += content;
    }
});