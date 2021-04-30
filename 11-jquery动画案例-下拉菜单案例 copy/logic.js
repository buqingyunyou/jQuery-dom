window.addEventListener('DOMContentLoaded', function () {
  // 需求1: 鼠标移入一级菜单li时, 让其子元素ul展示
  var oLis = document.querySelectorAll('.wrap>ul>li');
  // 定义定时器
  var timer1 = null;
  var timer2 = null;

  // console.log(oLis);


  oLis.forEach(function (item) {
    item.onmouseenter = function () {
      this.lastElementChild.style.display = "block";
      this.lastElementChild.style.height = '90px';

      // this.lastElementChild.firsElementChild.style.height = "90px";
       /* var _this = this;
       clearTimeout(timer1)
       timer = setTimeout(function(){
         console.log(1);
       },5000) */

    }
  })

  // 需求2: 鼠标移出一级菜单li时, 让其子元素ul隐藏
  /* oLis.forEach(function (item) {
    item.onmouseleave = function () {
      this.lastElementChild.style.display = "none";
      // console.log(this);
      this.lastElementChild.firstElementChild.style.height = "0px";
    }

    // item.onmouseleave = function(){
    //   this.lastElementChild.style.display = "none";
    //   this.lastElementChild.style.height = "0px";
    // }
  }) */

})