<template>
  <Hostlist/>
</template>

<script>
import Hostlist from './components/Hostlist.vue'

export default {
  name: 'App',
  data() {
    return { 
      hosts: []
    }
  },
 
  computed: {
   
  },
  watch: {

  },
  methods: {
    async addNewHost(){
      const newHost = {
        'id': this.id,
        'name': this.name,
        'ip': this.ip,
        'price': this.price,
        'startdata': this.startdata,
        'enddata': this.enddata,
        'specification': this.specification,
        'comment': this.comment
      }
      this.hosts.push(newHost)
      const response = this.axios.post("http://hostlist-api/api-create.php", newHost);
      this.id = ''
      this.name = ''
      this.ip = ''
      this.price = ''
      this.startdata = ''
      this.enddata = ''
      this.specification = ''
      this.comment = ''
    }
  },
  components: {
    Hostlist,
  }
}
</script>

<style>
  h2{
    font-size: 1.5em;
  }
  .table-title {
      padding-bottom: 15px;
      background: #435d7d;
      color: #fff;
      padding: 16px 30px;
      min-width: 100%;
      margin: -20px 0px 10px -22px;
      border-radius: 3px 3px 0 0;
  }
  *{
    font-size: 17px;
  }
  body{
    background: #f1f1f1;
  }
  .table {
    width: 100%;
    margin-bottom: 20px;
    border: 5px solid #f1f1f1;
    border-top: 5px solid #f1f1f1;
    border-bottom: 3px solid #f1f1f1;
    border-collapse: collapse; 
    outline: 3px solid #435d7d;
    font-size: 17px;
    background: #f1f1f1;
  }
  .table th {
    font-weight: bold;
    padding: 7px;
    background: #435d7d;;
    border: none;
    text-align: left;
    border-top: 3px solid #fff;
    border-bottom: 3px solid #435d7d;
  }
  .table td {
    padding: 7px;
    /* border: none; */
    /* border-top: 3px solid #fff; */
    border-bottom: 2px solid #435d7d;
  }
  .table tbody tr:nth-child(even){
    /* background: #f8f8f8!important; */
  }
  thead{
    color: white;
  }
  input{
    width: 100%;
    outline: none;
    border: none;
    background: #f1f1f1;
  }
</style>
