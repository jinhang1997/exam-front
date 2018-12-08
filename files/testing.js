
var vm = new Vue({
  el:'#show_paper',
  data:{
    paperid: '',
    test: ''
    /*test:{
      test_problem: [
        { id: '1',problem: '1+1=?',type: 'keguan',point: '5',option1: '5',option2: '2',option3: '4',option4: '3',answer: '',},
        { id: '2',problem: '你好吗？',type: 'zhuguan',point: '10',option1: '',option2: '',option3: '',option4: '',answer: '',}
      ]
    }*/
  },
  methods:{
    submit_answer:function(){
      this.$http.post(backend_server + 'test-manage/', this.test, {credentials: true})
      .then(function(res){
        console.log(res.bodyText);
        var dataret = JSON.parse(res.bodyText);
        if (dataret.code == 200)
        {
          alert('提交答案成功：用户' + dataret.stu);
        }
        else
        {
          alert('提交答案失败(1)');
        }
      },function(res){
        console.log(res.status);
        alert('提交答案失败(2)');
      });
    },
    get_test:function(){
      this.$http.get(backend_server + 'test-manage/?id=' + this.paperid, {credentials: true})
      .then(function(res){
        console.log(res.bodyText);
        var dataret = JSON.parse(res.bodyText);
        if (dataret.code == 200)
        {
          this.test = dataret.test;
        }
        else
        {
          alert('获取题目失败(1)');
        }
      },function(res){
        console.log(res.status);
        alert('获取题目失败(2)');
      });
    }
  },
  mounted(){
    this.paperid = getQueryString('paperid');
    this.get_test();
  },
})

