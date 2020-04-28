<template>
  <q-page>
    <q-card flat bordered>
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Ridho Dzaki S </q-item-label>
          <q-item-label caption>
            Mahasiswa UBL FIK , Angkatan 18
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />

      <q-card-section horizontal>
        <q-card-section>
          {{ data }}
        </q-card-section>

        <q-separator vertical />

        <q-card-section class="col-4">
          <q-item-label>Gmail : ridhodzaki03@gmail.com </q-item-label>
          <q-item-label>WA : 083809516742 </q-item-label>
        </q-card-section>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      data: 'Dia adalah seorang mahasiswa yang senang sekali yang berkaitan tentang programmer , dalam pembuatan aplikasi ini , dia berada di semua bidang'
    }
  }
}
</script>
<style lang="sass" scoped>
</style>
