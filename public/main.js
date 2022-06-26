
console.log("hello");

const str = `"Euler\'s identity $e^{i\\pi}+1=0$ is a beautiful formula in $\\RR^2$."`
document.addEventListener("DOMContentLoaded", () => {
    const md = markdownit({ html: true })
        .use(texmath, {
            engine: katex,
            delimiters: 'dollars',
            katexOptions: { macros: { "\\RR": "\\mathbb{R}" } }
        });
    document.getElementById("out").innerHTML = md.render(str);
})