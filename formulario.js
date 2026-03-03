const $form = document.querySelector('#form');
const $buttonMailto = document.querySelector('#info-mail');

$form.addEventListener('submit', function (event) {
  event.preventDefault();

  const form = new FormData(event.currentTarget);

  const name = form.get('name') || '';
  const email = form.get('email') || '';
  const mensaje = form.get('mensaje') || '';

  const subject = encodeURIComponent(`Consulta de ${name}`);
  const body = encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\nConsulta:\n${mensaje}`);

  $buttonMailto.setAttribute('href', `mailto:nazarlucas94@gmail.com?subject=${subject}&body=${body}`);
  $buttonMailto.click();
});