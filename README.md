# exam-front
在线考试系统前端部分
- NUAA 软件工程专业
- 软件工程综合课程设计

## List of pages

- index.html 默认访问 | 登录页面，只有账号密码输入功能
- admin.html 由 `index.html` 管理员身份跳转来 | 管理员页面，可以控制试卷可用状态
- score.html 由 `admin.html` 跳转来 | 分数页面，可以查看学生成绩
- papermanage.html 由 `admin.html` 跳转来 | 试题管理页面，可以录入题目和正确/错误答案，可以删除目前的试卷
- wait.html  由 `index.html` 学生身份跳转来 | 等待页面，学生应从此页面看到考试是否开始等信息（若考试已结束，则可以看到分数）
- paper.html 由 `wait.html` 学生身份跳转来 | 考试页面，学生在此页面上进行答题和提交试卷操作
