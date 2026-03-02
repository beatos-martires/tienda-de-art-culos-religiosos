

const $form =document.querySelector('#form');
const $buttonMailto = document.querySelector('#información');

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    console.log (form.get('name'))
    $buttonMailto.setAttribute('href', `mailto: leandrobarrionuevo49@gmail.com?sumbject=${form.get ('name')}${form.get ('email')}&body=${form.get ('mensaje')}`)
    $buttonMailto.click()
}