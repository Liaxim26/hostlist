<template>
  <div class="table-title">
    <div class="row">
      <div class="col-sm-6">
        <h2>hostslist</h2>
      </div>
    </div>
  </div>
  <table class="table table-striped table-hover">
    <thead>
      <tr>
        <th>id</th>
        <th>Имя хоста</th>
        <th>ip</th>
        <th>Цена</th>
        <th>Оплачено</th>
        <th>До</th>
        <th>Характеристики</th>
        <th>Комментарий</th>
      </tr> 
    </thead>
    <tbody>
      <tr v-for="host in hosts" :key="host.id">
        <Host 
          :host_prop="host"
        /> 
      </tr> 
     <AddHost />
    </tbody>
  </table>
</template>

<script>
import Host from './Host.vue'
import AddHost from './AddHost.vue'

export default {
  name: 'Hostlist',
  props: {
    
  },
  data() {
    return{
      hosts: []
    }
  },
  mounted() {
    this.axios
      .get('http://hostlist-api/index.php')
      .then(response => (this.hosts = response.data))

  },
  methods: {
    // findHosts(){
    //   this.axios
    //   .get('http://hostlist-api/index.php')
    //   .then(response => (this.hosts = response.data))
    // }
  },
  components: {
    Host, AddHost,
  }
}
</script>


<style scoped>

</style>
