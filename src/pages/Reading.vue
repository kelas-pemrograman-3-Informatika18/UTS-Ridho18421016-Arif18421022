<template>
  <q-page class="flex flex-center">
    <q-card
      class="my-card">
      <q-img
        :src="gambar"
        style="height: 500px"
        basic
      >
        <div class="absolute-bottom text-h6">
          {{ judul }}
        </div>
      </q-img>

      <q-card-section>
        {{ isi }}
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      tag: 'Informatika 18',
      judul: 'Seorang Dosen membuat mahasiswanya kewalahan',
      gambar: 'https://cdn.quasar.dev/img/parallax2.jpg',
      isi: 'Kejadian bermula saat Dosen berinisial W , membuat Uts untuk mahasiswanya tetapi , tugasnya sungguh berat , dan materi yang dipelajari tidak sampai disitu , yang mengakibatkan semua mahasiswanya mendapatkan nilai rendah , saat uts pun dosen tersebut menghilang tanpa berpamitan dengan mahasiswanya, Apakah ini patut di contoh ??'
    }
  }
}
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 1000px
</style>
