<template>
  <q-page padding>
    <q-input
      bg-color="$grey"
      outlined
      rounded
      label="search"
      v-model="cari"
      hint="Pencarian Berdasarkan Tag"
      dense>
        <template v-slot:after>
          <q-btn
          @click="onCari"
          icon="search"
          rounded />
        </template>
    </q-input>
    <div class="q-pa-md">
    <div class="row">
      <div class="col">
        <q-card
          class="my-card"
          flat
          bordered
          v-for="now in now"
          :key="now.judul"
          :to="now.to"
          exact>
          <q-card-section horizontal>
            <q-card-section class="col q-pt-xs">
              <div class="text-overline">{{ now.tag }}</div>
              <div class="text-h5 q-mt-sm q-mb-xs">{{ now.judul }}</div>
            </q-card-section>

            <q-card-section class="col-5 flex flex-center">
              <q-space/>
              <q-img
                class="rounded-borders"
                :src="now.gambar"
                style="height: 150px; width:150px"
              />
            </q-card-section>
          </q-card-section>
          <q-separator />
            <q-card-actions>
              <q-btn flat color="primary" :to="{ name: 'readuser', params: { id: now._id } }" >
                See More
              </q-btn>
            </q-card-actions>
          <q-separator />
        </q-card>
      </div>
    </div>
  </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      cari: null,
      now: null
    }
  },
  methods: {
    onCari () {
      this.$axios.get('berita/tampilsemua/' + this.cari)
        .then(res => {
          console.log(res)
          if (res.data.sukses) {
            this.now = res.data.data
          } else {
            this.$q.notify({
              type: 'negative',
              message: res.data.pesan
            })
          }
        })
    },
    confirm (id) {
      this.$q.dialog({
        title: 'Konfirmasi',
        message: 'Apakah Anda Yakin Menghapus Data',
        cancel: true,
        persistent: true
      }).onOk(() => {
        console.log('>>>> OK' + id)
        this.$axios.delete('berita/delete/' + id)
          .then(res => {
            if (res.data.sukses) {
              this.$q.notify({
                type: 'positive',
                message: res.data.pesan
              })
              this.getData()
            } else {
              this.$q.notify({
                type: 'negative',
                message: res.data.pesan
              })
            }
          })
      })
    }
  }
}
</script>
