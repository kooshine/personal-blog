/*!
 * Start Bootstrap - Clean Blog v5.0.3 (https://startbootstrap.com/template-overviews/clean-blog)
 * Copyright 2013-2019 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-clean-blog/blob/master/LICENSE)
 */
 
$(function show_article_list(){         //$()内部内容在页面加载时调用  显示文章列表 
    var lists = document.getElementById('article_list');
    //模拟文章列表数据
    var data = [{link:'post.html',title:'code1', sub_title:'abstract1',author:'空山1',author_link:'#',time:'2019-03-07'},
                {link:'post.html',title:'article2', sub_title:'abstract4',author:'空山2',author_link:'#',time:'2019-03-04'},
                {link:'post.html',title:'article3', sub_title:'abstract4',author:'空山3',author_link:'#',time:'2019-03-05'},
                {link:'post.html',title:'article4', sub_title:'abstract4',author:'空山4',author_link:'#',time:'2019-03-08'},
            ];
    var html = ''
    for (var i = 0; i < data.length; i++) {
        html += set_content(data[i]);
        html += '<hr>'
    }
    html += '<div class="clearfix">'
            +'<a class="btn btn-primary float-right" href="#">More &rarr;</a>'
            +'</div>'
    lists.innerHTML = html;
}
)
function set_content(item) {
    var div = '<div class="post-preview"> <a href="' 
                + item.link + 
              '"><h2 class="post-title"> ' 
                + item.title +
                '</h2> <h3 class="post-subtitle"> '
                + item.sub_title +
                ' </h3> </a> <p class="post-meta">Posted by <a href="'
                + item.author_link +
                '">'
                + item.author + ' </a>'
                + item.time +
                '</p> </div>';
  return div;
}
!function(o){"use strict";o("body").on("input propertychange",".floating-label-form-group",function(i){o(this).toggleClass("floating-label-form-group-with-value",!!o(i.target).val())}).on("focus",".floating-label-form-group",function(){o(this).addClass("floating-label-form-group-with-focus")}).on("blur",".floating-label-form-group",function(){o(this).removeClass("floating-label-form-group-with-focus")});if(992<o(window).width()){var s=o("#mainNav").height();o(window).on("scroll",{previousTop:0},function(){var i=o(window).scrollTop();i<this.previousTop?0<i&&o("#mainNav").hasClass("is-fixed")?o("#mainNav").addClass("is-visible"):o("#mainNav").removeClass("is-visible is-fixed"):i>this.previousTop&&(o("#mainNav").removeClass("is-visible"),s<i&&!o("#mainNav").hasClass("is-fixed")&&o("#mainNav").addClass("is-fixed")),this.previousTop=i})}}(jQuery);

