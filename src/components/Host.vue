<template>
  <td>{{ host.id }}</td>
  <td><input @blur='updateHost' v-model="host.name"></td>
  <td><input @blur='updateHost' v-model="host.ip"></td>
  <td><input @blur='updateHost' v-model="host.price"></td>
  <td><input @blur='updateHost' v-model="host.lastPaymentDate"></td>
  <td><input @blur='updateHost' v-model="host.nextPaymentDate"></td>
  <td><input @blur='updateHost' v-model="host.specification"></td>
  <td><input @blur='updateHost' v-model="host.comment"></td>
  <td>
    <button 
      @click="deleteHost"
    >
    Х
    </button>
  </td>
</template>

<script>

export default {
  name: 'Host',
  props: [
    'host_prop'
  ],
  data() {
    return{
      host: this.host_prop
    }
  },
  methods: {
    updateHost() {
      const requestBody = {
        id: this.host.id,
        name: this.host.name,
        ip: this.host.ip,
        price: this.host.price,
        lastPaymentDate: this.host.lastPaymentDate,
        nextPaymentDate: this.host.nextPaymentDate,
        specification: this.host.specification,
        comment: this.host.comment
      }
      this.axios
      .put('http://hostlist-api/api-update.php', requestBody)
      //.then(response => (this.hosts = response.data))
      .then(response => console.log(response))
    },
    deleteHost() {
      const requestBody = {
        id: this.host.id,
        name: this.host.name,
        ip: this.host.ip,
        price: this.host.price,
        lastPaymentDate: this.host.lastPaymentDate,
        nextPaymentDate: this.host.nextPaymentDate,
        specification: this.host.specification,
        comment: this.host.comment
      }
      this.axios
      .put('http://hostlist-api/api-delete.php', requestBody)
      .then(response => console.log(this.host.id))
      this.reloadList()
    },
    reloadList() {
      this.$emit("reloadList");
    },
  },
  created() {
    document.addEventListener('beforeunload', () => this.updateHost())
    window.onbeforeunload = () => {
      this.updateHost()
    }
  }
}
</script>


<style scoped>

</style>
