
var vm = new Vue({
  el:'#app',
  data:{
    paper: {
      pid: 0,
      pname: '',
      teaname: '',
      penabled: ''
    },
    newpro:{
      problem: '',
      ptype: '',
      point: '',
      right: '',
      wrong1: '',
      wrong2: '',
      wrong3: ''
    },
    stulist: {
      count: 7,
      stu_list: [
        {"stu": "16001"},
        {"stu": "16002"},
        {"stu": "16003"},
        {"stu": "16004"},
        {"stu": "16005"},
        {"stu": "16006"},
        {"stu": "16007"}
      ],
    },
    batch_names: '',
    procount: 0,
    prolist : '',
    paperid: 0
  },
  methods:{
    delete_all_names:function(){
      // TODO: delete all names from student list
    },
    batch_insert:function(){
      postdata = {
        stulist: this.batch_names,
        paperid: this.paper.pid,
        action: 'addstu'
      };
      this.$http.post(backend_server + 'paper-stulist/', postdata, {credentials: true})
      .then(function(res){
        console.log(res.bodyText);
        var dataret = JSON.parse(res.bodyText);
        if (dataret.code == 200)
        {
          //console.log(this.prolist);
          alert('批量导入学生名单成功');
          location.reload();
        }
        else
        {
          alert('批量导入学生名单失败（1）');
          //location.reload();
        }
      },function(res){
        console.log(res.status);
        alert('批量导入学生名单失败（2）');
        //location.reload();
      });
    },
    remove:function(id_to_del){
      //console.warn(id_to_del + " is to be removed.");
      postdata = {
        action: 'delpro',
        paperid: this.paper.pid,
        problem: id_to_del
      };
      this.$http.post(backend_server + 'paper-modify/', postdata, {credentials: true})
      .then(function(res){
        //console.log(res.bodyText);
        var dataret = JSON.parse(res.bodyText);
        if (dataret.code == 200)
        {
          //console.log(this.prolist);
          alert('删除题目成功');
          location.reload();
        }
        else
        {
          alert('删除题目失败（1）');
          //location.reload();
        }
      },function(res){
        console.log(res.status);
        alert('删除题目失败（2）');
        //location.reload();
      });
    },
    modify:function(){
      // NOT confirmed to implement this one
    },
    insert:function(){
      postdata = {
        action: 'addpro',
        paperid: this.paper.pid,
        problem: this.newpro
      };
      console.log(postdata);
      this.$http.post(backend_server + 'paper-modify/', postdata, {credentials: true})
      .then(function(res){
        console.log(res.bodyText);
        var dataret = JSON.parse(res.bodyText);
        if (dataret.code == 200)
        {
          //console.log(this.prolist);
          alert('新增题目成功');
          location.reload();
        }
        else
        {
          //this.prolist = '获取试题列表失败(1)';
          alert('新增题目失败（1）');
          location.reload();
        }
      },function(res){
        console.log(res.status);
        //this.prolist = '获取试题列表失败(2)';
        alert('新增题目失败（2）');
        location.reload();
      });
    },
    get_paper_detail:function(){
      this.$http.get(backend_server + 'paper-get-detail/?id=' + this.paperid, {credentials: true})
      .then(function(res){
        console.log(res.bodyText);
        var dataret = JSON.parse(res.bodyText);
        if (dataret.code == 200)
        {
          this.paper = dataret.info;
          this.procount = dataret.paper.problem_count;
          this.prolist = dataret.paper.question_list;
          this.stulist = dataret.stulist;
          console.log(this.prolist);
          this.generate_stutable();
        }
        else
        {
          this.prolist = '获取试题列表失败(1)';
        }
      },function(res){
        console.log(res.status);
        this.prolist = '获取试题列表失败(2)';
      });
    },
    generate_stutable:function(){
      var tabledata = "<tr>";
      for (var i=0; i<this.stulist.count; i++)
      {
        tabledata += "<td>" + this.stulist.stu_list[i].stu + "</td>";
        if ((i + 1) % 8 == 0)
        {
          tabledata += "</tr><tr>";
        }
      }
      tabledata += "</tr>";
      $("#stutable").html(tabledata);
    }
  },
  created:function(){
    this.paperid = getQueryString('paperid');
    this.get_paper_detail();
  }
})