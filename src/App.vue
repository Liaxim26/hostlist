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
        <td>{{host.id}}</td>
        <td><input v-model="host.name"></td>
        <td><input v-model="host.ip"></td>
        <td><input v-model="host.price"></td>
        <td><input v-model="host.startdata"></td>
        <td><input v-model="host.enddata"></td>
        <td><input v-model="host.specification"></td>
        <td><input v-model="host.comment"></td>
      </tr> 
      <tr>
        <td></td>  
        <td><input v-model="name"></td>  
        <td><input v-model="ip"></td>  
        <td><input v-model="price"></td>  
        <td><input v-model="startdata"></td>  
        <td><input v-model="enddata"></td>  
        <td><input v-model="specification"></td>  
        <td><input v-model="comment"></td>  
      </tr>
      <tr><td><button @click=addNewHost>add</button></td></tr>
    </tbody>
  </table>
{{hosts}}
</template>

<script>

export default {
  name: 'App',
  data() {
    return { 
      hosts: [
        // {'id': 1, 'hostName': 'qweqwe', 'ip': 2133123},
        // {'id': 2, 'hostName': 'qweqwwe', 'ip': 2123123},
        // {'id': 3, 'hostName': 'qwewqwe', 'ip': 2131123},
        // {'id': 4, 'hostName': 'qweqewe', 'ip': 12213123},   
      ],
      id: '',
      name: '',
      ip: '',
      price: '',
      startdata: '',
      enddata: '',
      specification: '',
      comment: ''
    }
  },
  mounted() {
    this.axios
      .get('http://hostlist-api/index.php')
      .then(response => (this.hosts = response.data)); 
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
/* 
.table{
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
  border-collapse: collapse;
}
table {
    border-collapse: separate;
    text-indent: initial;
    border-spacing: 2px;
}
table {
    display: table;
    border-collapse: separate;
    box-sizing: border-box;
    text-indent: initial;
    border-spacing: 2px;
    border-color: grey;
}
thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
}
tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
}
table {
    border-collapse: separate;
    text-indent: initial;
    border-spacing: 2px;
}
.table {
    width: 100%;
    margin-bottom: 1rem;
    color: #212529;
}
tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
}
table.table tr th, table.table tr td {
    border-color: #e9e9e9;
    padding: 12px 15px;
    vertical-align: middle;
    text-align: start;
} */
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
