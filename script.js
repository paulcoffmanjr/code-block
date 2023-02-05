const copyButton = document.querySelectorAll('.copy-btn');

copyButton.forEach((btn) => {
  btn.addEventListener('click', () => {
    const text = btn.nextElementSibling.firstChild.textContent;
    console.log(text);
    navigator.clipboard.writeText(text);
  });
});
