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
        <th @click="change('name')">Имя хоста</th>
        <th @click="change('ip')">ip</th>
        <th @click="change('price')">Цена</th>
        <th @click="change('lastPaymentDate')">Оплачено</th>
        <th @click="change('nextPaymentDate')">До</th>
        <th @click="change('specification')">Характеристики</th>
        <th @click="change('comment')">Комментарий</th>
        <th></th>
      </tr> 
    </thead>
    <tbody>
      <tr v-for="host in hosts" :key="host.id">
        <Host 
          :host_prop="host"
          @reloadList="reloadList"
        /> 
      </tr> 
     <AddHost 
     @reloadList="reloadList"
     />
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
      hosts: [],
      
    }
  },
  mounted() {
    this.axios
      .get('http://hostlist-api/index.php')
      .then(response => (this.hosts = response.data))
      .then(this.hosts.price = parseInt(this.hosts.price))
  },
  computed: { 
    
  },
  methods: {
    reloadList() {
      this.axios
      .get('http://hostlist-api/index.php')
      .then(response => (this.hosts = response.data))
    }, 
    change(value) {
      if(value == 'price'){
        this.hosts.sort((a, b) => {
          if (parseInt(a[value]) > parseInt(b[value])) return 1
          if (parseInt(a[value]) < parseInt(b[value])) return -1
        })
      } else {
        this.hosts.sort((a, b) => {
          if (a[value] > b[value]) return 1
          if (a[value] < b[value]) return -1
        })
      }
    } 
  },
  components: {
    Host, AddHost,
  }
}
</script>


<style scoped>

</style>
