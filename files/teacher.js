
var vm = new Vue({
  el:'#app',
  data:{
    paperlist : [],
    newpaper: ''
  },
  methods:{
    create: function(){
      if (this.newpaper == '')
      {
        alert('试题名不能为空！');
        return;
      }
      // TODO: send the name of new paper
      postdata = {
        papername: this.newpaper,
        action: 'create'
      };
      this.$http.post(backend_server + 'paper-manage/', postdata, {credentials: true})
      .then(function(res){
        console.log(res.bodyText);
        var dataret = JSON.parse(res.bodyText);
        if (dataret.code == 200)
        {
          //console.log(this.prolist);
          alert('创建试题成功，试卷名：' + dataret.papername );
          location.reload();
        }
        else
        {
          alert('创建试题失败（1）');
          //location.reload();
        }
      },function(res){
        console.log(res.status);
        alert('创建试题失败（2）');
        //location.reload();
      });
      //
    },
    remove:function(paperid){
      // TODO: remove paper from paper list
      //
    },
    detail:function(paperid){
      // redirect to show detail
      window.open("detail.html?paperid=" + paperid);
    },
    get_test_list:function(){
      this.$http.get(backend_server + 'paper-get-list-tea/', {credentials: true})
      .then(function(res){
        console.log(res.bodyText);
        var dataret = JSON.parse(res.bodyText);
        if (dataret.code == 200)
        {
          this.paperlist = dataret.list;
          console.log(this.paperlist);
        }
        else
        {
          alert('获取试题列表失败(1)');
        }
      },function(res){
        console.log(res.status);
        alert('获取试题列表失败(2)');
      });
    }
  },
  created:function(){
    this.get_test_list();
  }
})