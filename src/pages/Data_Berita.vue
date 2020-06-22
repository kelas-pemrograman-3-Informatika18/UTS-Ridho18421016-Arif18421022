<template>
  <q-page padding>
    <div class="q-pa-md">
    <q-table
      title="Data Berita"
      :data="data"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="Tag" :props="props">
            {{ props.row.tag }}
          </q-td>
          <q-td key="Judul" :props="props">
            {{ props.row.Judul }}
          </q-td>
          <q-td key="Aksi" :props="props">
            <div class="row">
              <div class="col">
                <q-btn label="edit" color="warning" icon="edit" unelevated></q-btn>
              </div>
              <div class="col">
                <q-btn label="hapus" color="negative" icon="delete" unelevated></q-btn>
              </div>
            </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
  <div class="absolute-bottom text-center q-mb-lg">
    <q-btn
    to="/input"
    round
    color="primary"
    size="12px"
    icon="add"
    />
  </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      columns: [
        {
          name: 'Tag',
          required: true,
          label: 'Tag',
          align: 'left',
          field: 'Tag',
          sortable: true
        },
        { name: 'Judul', align: 'center', label: 'Judul', field: 'Judul', sortable: true },
        { name: 'Aksi', label: 'Aksi', field: 'Aksi', align: 'center' }
      ],

      data: [
        {
          tag: 'Informatika 18',
          Judul: 'Seorang Dosen membuat mahasiswanya kewalahan'
        },
        {
          tag: 'Hanya Kelompok',
          Judul: 'Mahasiswa Fakultas Ilmu Komputer Raih Juara 2 Lomba Kontes Robot Nusantara (KRON)'
        }
      ]
    }
  }
}
</script>
