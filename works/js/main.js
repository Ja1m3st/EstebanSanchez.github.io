const el = document.getElementById('poster');
const el2 = document.getElementById('poster2');
const height = el.clientHeight;
const width = el.clientWidth;

el.addEventListener('mousemove', (evt) => {
    const { layerX, layerY } = evt;

    const yRotation = ((layerX - width / 2) / width) * 20;
    const xRotation = ((layerY - height / 2) / height) * 20;

    const string = `
        perspective(500px)
        scale(1.1)
        rotateX(${xRotation}deg)
        rotateY(${yRotation}deg)
    `;

    el.style.transform = string;
});

el.addEventListener('mouseout', () => {
    el.style.transform = `
        perspective(500px)
        scale(1)
        rotateX(0)
        rotateY(0)
    `;
});


el2.addEventListener('mousemove', (evt) => {
    const { layerX, layerY } = evt;

    const yRotation = ((layerX - width / 2) / width) * 20;
    const xRotation = ((layerY - height / 2) / height) * 20;

    const string = `
        perspective(500px)
        scale(1.1)
        rotateX(${xRotation}deg)
        rotateY(${yRotation}deg)
    `;

    el2.style.transform = string;
});

el2.addEventListener('mouseout', () => {
    el2.style.transform = `
        perspective(500px)
        scale(1)
        rotateX(0)
        rotateY(0)
    `;
});
