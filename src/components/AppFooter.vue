<template>
  <footer class="container footer">
    <img class="footer__logo" src="./../assets/img/logo.svg" alt="Logo" />
    <div class="footer__copyright">&copy; alpha, 2023</div>
  </footer>
</template>

<style scoped>
footer {
  background-color: #f0f6fe;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: left;
}

.footer__logo {
  margin-bottom: 15px;
}

.footer__copyright {
  color: #81899d;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22.4px;
}

@media screen and (min-width: 768px) {
  footer {
    padding-top: 60px;
    padding-bottom: 60px;
  }
}
</style>
