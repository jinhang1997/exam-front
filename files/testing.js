
var vm = new Vue({
  el:'#show_paper',
  data:{
    paperid: '',
    paper:{
      problem_count:1,
      question_list:[
        {
          id: 1,
          problem: 'problem1',
          type: 'zhuguan',
          point: 10,
          right: '',
          wrong1: '',
          wrong2: '',
          wrong3: '',
          answer: ''
        },
        {
          id: 2,
          problem: 'problem2',
          type: 'keguan',
          point: 4,
          right: 'right2',
          wrong1: 'wrong2_1',
          wrong2: 'wrong2_2',
          wrong3: 'wrong2_3',
          answer: ''
        },
        {
          id: 3,
          problem: 'problem3',
          type: 'zhuguan',
          point: 8,
          right: '',
          wrong1: '',
          wrong2: '',
          wrong3: '',
          answer: ''
        },
        {
          id: 4,
          problem: 'problem4',
          type: 'keguan',
          point: 4,
          right: 'right4',
          wrong1: 'wrong4_1',
          wrong2: 'wrong4_2',
          wrong3: 'wrong4_3',
          answer: ''
        }
      ],
    }
  },
  methods:{
    get_test:function(){
      this.$http.get(backend_server + 'paper-get-detail/?id=' + this.paperid, {credentials: true})
      .then(function(res){
        console.log(res.bodyText);
        var dataret = JSON.parse(res.bodyText);
        if (dataret.code == 200)
        {
          this.paper = dataret.info;
          /*this.procount = dataret.paper.problem_count;
          this.prolist = dataret.paper.question_list;*/
          this.prolist = dataret.paper;
          this.stulist = dataret.stulist;
          //console.log(this.prolist);
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
    }
  },
  mounted(){
    this.paperid = getQueryString('paperid');
    //this.get_test();
  },
})

