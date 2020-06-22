<template>
  <q-page>
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card" flat bordered>
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

        <q-card-section>
          <q-card-section>
            {{ data }}
          </q-card-section>
        </q-card-section>
          <q-separator />

        <q-card-actions>
          <q-btn flat round icon="email" />
          <q-btn flat>
            ridhodzaki03@gmail.com
          </q-btn>
        </q-card-actions>
      </q-card>

      <q-card class="my-card" flat bordered>
        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>Muhammad Arif N </q-item-label>
            <q-item-label caption>
              Mahasiswa UBL FIK , Angkatan 18
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-separator />

        <q-card-section horizontal>
          <q-card-section>
            {{ data1 }}
          </q-card-section>
        </q-card-section>
        <q-card-actions>
          <q-btn flat round icon="email" />
          <q-btn flat>
            arief03@gmail.com
          </q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      data: 'Dia adalah seorang mahasiswa yang senang sekali yang berkaitan tentang programmer , dalam pembuatan aplikasi ini , dia berada di bidang pembuatanya',
      data1: 'Dia adalah seorang mahasiswa UBL , dalam pembuatan aplikasi ini , dia berada di bagian pendesain'
    }
  }
}
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 550px
</style>
