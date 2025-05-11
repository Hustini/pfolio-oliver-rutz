<script setup>
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="layout-container">
    <div class="about">About</div>
    <img class="hero-portrait" src="/img/about_portrait.jpg" alt="portrait">
    <div class="about-content">
      <div class="text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer magna  tortor, euismod vitae dolor eget, porta consectetur augue. Morbi lorem  quam, semper vel aliquet volutpat, pretium eget nisl. Morbi hendrerit  turpis sapien, vel sollicitudin ipsum bibendum quis. Nunc id elementum  nulla, eu tincidunt ex. Nulla condimentum tincidunt rhoncus. Donec  sollicitudin varius libero vel vulputate. Pellentesque pharetra  scelerisque nisi, nec laoreet magna blandit sit amet. Mauris mattis nisi purus, commodo ornare magna semper in. Ut interdum feugiat nisl et  sagittis. Nullam volutpat urna id arcu dapibus, condimentum imperdiet  dolor fringilla. Aliquam sed viverra tellus. Vivamus mattis libero a  nisi viverra, at eleifend ligula fringilla. Nunc in dignissim sapien, et vestibulum ante. Sed eleifend, felis nec faucibus commodo, mi purus  efficitur lorem, vitae mollis leo nibh eget enim.
        Sed volutpat sapien sem, et vestibulum arcu blandit ut. Mauris tincidunt pharetra arcu non facilisis. Cras sed dapibus purus. Morbi convallis at felis non laoreet. Cras feugiat lobortis sodales. Mauris accumsan est  ut euismod faucibus. Nunc at dapibus eros. Pellentesque eu dapibus  neque, nec porta tellus. Donec ac posuere mauris. Morbi in condimentum  odio.
        Quisque venenatis quam nec pretium convallis. Sed rutrum, neque in  facilisis sodales, nibh ligula tincidunt arcu, at dapibus risus nisl  eget elit. Aenean auctor dui diam, sed malesuada enim congue eget. Orci  varius natoque penatibus et magnis dis parturient montes, nascetur  ridiculus mus. Pellentesque quis metus porttitor, vestibulum neque non,  rutrum dui. Maecenas non mauris eget mauris venenatis vehicula.  Pellentesque pharetra augue turpis, semper molestie lectus sagittis  vitae. Proin non lorem bibendum, faucibus libero in, ullamcorper elit.  Sed vel nunc nulla. Etiam lectus ex, posuere et convallis sit amet,  rhoncus in urna. Morbi justo nisl, sagittis quis tempus vel, placerat  nec nulla.
        Phasellus cursus orci nec tempus egestas. Lorem ipsum dolor sit amet,  consectetur adipiscing elit. Aenean malesuada nisl id tellus aliquam,  vel lobortis mi aliquet. Fusce dictum leo magna, sed eleifend erat  ultricies id. Cras ut imperdiet ipsum. Nullam at facilisis nunc. In hac  habitasse platea dictumst.
        Donec est nunc, ultricies sit amet elit at, tristique tempor tellus. Sed aliquam congue feugiat. Vivamus ut euismod orci, vel luctus sem.  Integer a lacus tortor. Morbi vitae nisl malesuada, dictum nibh eget,  faucibus lorem. Integer porttitor, nibh nec lobortis viverra, felis  nulla eleifend velit, ac imperdiet magna orci vel lacus. Quisque pretium metus sit amet purus rhoncus, vitae volutpat lorem accumsan. Maecenas  faucibus posuere blandit. Duis id blandit odio, at interdum felis.</div>
      <div class="img-container">
        <img class="img-items" src="/img/about_placeholder.jpg" alt="placeholder image">
        <img class="img-items" src="/img/about_placeholder.jpg" alt="placeholder image">
        <img class="img-items" src="/img/about_placeholder.jpg" alt="placeholder image">
      </div>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
.about {
  font-size: 6rem;
}

.hero-portrait {
  width: 100%;
}

.text {
  font-size: 16px;
}
</style>