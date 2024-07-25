const refId= 10e16*Math.random();
const url = "https://withpersona.com/verify?inquiry-template-id=itmpl_NxU5CMYGh7ZKFT5VU2XJfUh3beC4&environment-id=env_4M1FZXy9kptN1LXUMgvuTs9jxa42&referrence-id=" + refId;

button = document.getElementById('fire');
button.addEventListener('click', () => {
console.log('Clicked and starting app...')
window.open(url, '_self');
})

