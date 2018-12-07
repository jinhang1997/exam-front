
var vm = new Vue({
  el:'#show_paper',
  data:{
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
  mounted(){
    //this.ShowPaper()
  },
  methods:{
    ShowPaper:function(){
      questions = this.paper.question_list;
      questions.forEach(question => {
        var paper_div =document.getElementById("show_paper");
        if(question.type=='zhuguan')
        {
          var tr=document.createElement("tr");
          var qid=document.createElement("td");
          var qdesc=document.createElement("td");
          qid.innerHTML=question.id;
          qdesc.innerHTML=question.problem;
          var tab=document.createElement("table");
          tab.appendChild(tr);
          tr.appendChild(qid);
          tr.appendChild(qdesc);

          var input=document.createElement("textarea");
          input.setAttribute("type", "textarea");
          input.style.width = "200px";
          input.style.height = "100px";
          paper_div.appendChild(tab);
          paper_div.appendChild(input);
        }
        else if(question.type=='keguan')
        {
          var tr=document.createElement("tr");
          var qid=document.createElement("td");
          var qdesc=document.createElement("td");
          qid.innerHTML=question.id;
          qdesc.innerHTML=question.problem;
          var tab=document.createElement("table");
          tab.appendChild(tr);
          tr.appendChild(qid);
          tr.appendChild(qdesc);
          paper_div.appendChild(tab);

          var i=0;
          var prompt = 'A.';
          for (var key in question)
          {
            i++;
            if(i>4)
            {
              var option=document.createElement("button");
              option.innerHTML=prompt + question[key];
              paper_div.appendChild(option);
              prompt = String.fromCharCode(prompt.charCodeAt(0) + 1);
              prompt += '.';
             }
          }
        };
      });
    }
  }
})

