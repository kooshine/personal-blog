/*!
 * Start Bootstrap - Clean Blog v5.0.3 (https://startbootstrap.com/template-overviews/clean-blog)
 * Copyright 2013-2019 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-clean-blog/blob/master/LICENSE)
 */
 
$(function show_article_list(){         //$()内部内容在页面加载时调用  显示文章列表 
    var lists = document.getElementById('article_list');

    console.log(data);
    var html = '';
    for (var i = 0; i < data.length; i++) {
        html += set_content(data[i]);
        html += '<hr>'
    }
    html += '<div class="clearfix">'
            +'<a class="btn btn-primary float-right" href="javascript:void(0);" onclick="more()">More &rarr;</a>'
            +'</div>';
    lists.innerHTML = html;
}
)
//点击More 读取更多文章列表
//待解决：如果没有更多，给出提示
function more(){
  console.log('for more');
  //javascript 给django传数据   using ajax
  $.ajax({
    url:'#',
    dataType: 'json',
    type: 'GET',
    data: {
      name: 'more'
    },
    success: function(data) {
      var lists = document.getElementById('article_list');
      console.log(data);
      var html = ''
      for (var i = 0; i < data.length; i++) {
          html += set_content(data[i]);
          html += '<hr>'
      }
      html += '<div class="clearfix">'
      +'<a class="btn btn-primary float-right" href="javascript:void(0);" onclick="more()">More &rarr;</a>'
      +'</div>'
      lists.innerHTML = html;      
    },
    error: function(){
      alert('请求失败~~~');
    }
  });
}
//显示文章列表
function set_content(item) {
    var id = item.id;
    console.log(id);
    var div = '<div class="post-preview"> <a target="_blank" href="post/' 
            + item.id +
            '"><h2 class="post-title"> ' 
            + item.title +
            '</h2> <h3 class="post-subtitle"> '
            + item.abstract + "……" +
            ' </h3> </a> <p class="post-meta">Posted by <a href="post/'
            + item.id +
            '">'
            + item.author + ' </a>'
            + item.time +
            '</p> </div>';
  return div;
}
!function(o){"use strict";o("body").on("input propertychange",".floating-label-form-group",function(i){o(this).toggleClass("floating-label-form-group-with-value",!!o(i.target).val())}).on("focus",".floating-label-form-group",function(){o(this).addClass("floating-label-form-group-with-focus")}).on("blur",".floating-label-form-group",function(){o(this).removeClass("floating-label-form-group-with-focus")});if(992<o(window).width()){var s=o("#mainNav").height();o(window).on("scroll",{previousTop:0},function(){var i=o(window).scrollTop();i<this.previousTop?0<i&&o("#mainNav").hasClass("is-fixed")?o("#mainNav").addClass("is-visible"):o("#mainNav").removeClass("is-visible is-fixed"):i>this.previousTop&&(o("#mainNav").removeClass("is-visible"),s<i&&!o("#mainNav").hasClass("is-fixed")&&o("#mainNav").addClass("is-fixed")),this.previousTop=i})}}(jQuery);

