<template>
  <tr>
    <td></td>  
    <td><input v-model="newHost.name"></td>  
    <td><input v-model="newHost.ip"></td>  
    <td><input v-model="newHost.price"></td>  
    <td><input type="date" v-model="newHost.lastPaymentDate"></td>  
    <td><input type="date" v-model="newHost.nextPaymentDate"></td>  
    <td><input v-model="newHost.specification"></td>  
    <td><input v-model="newHost.comment"></td>  
    <td><button 
    @click="addNewHost"
  >
    Добавить
  </button></td>
  </tr>
  
</template>

<script>

export default {
  name: 'AddHost',
  props: [

  ],
  data() {
    return{
      newHost: {
        name: '',
        ip: '',
        price: '',
        lastPaymentDate: '',
        nextPaymentDate: '',
        specification: '',
        comment: ''
      }
    }
  },
  methods: {
    addNewHost() {
      const requestBody = {
        name: this.newHost.name,
        ip: this.newHost.ip,
        price: this.newHost.price,
        lastPaymentDate: this.newHost.lastPaymentDate,
        nextPaymentDate: this.newHost.nextPaymentDate,
        specification: this.newHost.specification,
        comment: this.newHost.comment
      }
      this.axios
      .post('http://hostlist-api/api-create.php', requestBody)
      //.then(response => (this.hosts = response.data))
      .then(response => console.log(response))
      .catch(error => console.log(error)) 
      this.reloadList()
      this.clearAddRow()
    },
    clearAddRow() {
        this.newHost.name = '',
        this.newHost.ip = '',
        this.newHost.price = '',
        this.newHost.lastPaymentDate = '',
        this.newHost.nextPaymentDate = '',
        this.newHost.specification = '',
        this.newHost.comment = ''
    },
    reloadList() {
      this.$emit("reloadList");
    },
  }
}
</script>


<style scoped>

</style>
