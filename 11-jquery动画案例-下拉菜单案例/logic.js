window.addEventListener('DOMContentLoaded',function(){
  // 需求1: 鼠标移入一级菜单li时, 让其子元素ul展示
  var oLis = document.querySelectorAll('.wrap>ul>li');
  // var 
  oLis.forEach(function(item){
    item.onmouseenter = function(){
      /* 
        获取最后一个子元素 lastElementChild
        获取第一个子元素  firstElementChild
        获取上一个兄弟元素 previousSiblings
        获取下一个兄弟元素 nextSiblings
        获取父元素 parentNode
      */
      // console.log(this.lastElementChild);
      // console.log(this.firstElementChild);
      // console.log(this.previousElementSibling);
      // console.log(this.nextElementSibling);
      this.lastElementChild.style.display = "block";

    }
  })

  // 需求2: 鼠标移出一级菜单li时, 让其子元素ul隐藏
  oLis.forEach(function(item){
    item.onmouseleave = function(){
      this.lastElementChild.style.display = "none";

    }
  })

})