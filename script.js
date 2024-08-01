const input = document.querySelectorAll('.css-controller input')

input.forEach( (input) => input.addEventListener('change', update))


function update( ) {
    const data = this.dataset.sizing || '';
    document.documentElement.style.setProperty(
        `--${this.name}`,
        this.value + data
    );
}