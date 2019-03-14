
!function(o){"use strict";o("body").on("input propertychange",".floating-label-form-group",function(i){o(this).toggleClass("floating-label-form-group-with-value",!!o(i.target).val())}).on("focus",".floating-label-form-group",function(){o(this).addClass("floating-label-form-group-with-focus")}).on("blur",".floating-label-form-group",function(){o(this).removeClass("floating-label-form-group-with-focus")});if(992<o(window).width()){var s=o("#mainNav").height();o(window).on("scroll",{previousTop:0},function(){var i=o(window).scrollTop();i<this.previousTop?0<i&&o("#mainNav").hasClass("is-fixed")?o("#mainNav").addClass("is-visible"):o("#mainNav").removeClass("is-visible is-fixed"):i>this.previousTop&&(o("#mainNav").removeClass("is-visible"),s<i&&!o("#mainNav").hasClass("is-fixed")&&o("#mainNav").addClass("is-fixed")),this.previousTop=i})}}(jQuery);

$(function show_article_detail(){
    //添加标题
    var title = document.getElementById('title');
    var html = ""+ data.title;
    title.innerHTML = html;
    //添加摘要
    var abstract = document.getElementsByClassName('subheading')[0];
    html = "" + data.abstract;
    abstract.innerHTML = html;
    //添加作者、时间
    var author = document.getElementsByClassName('meta')[0];
    console.log(author);
    html = '<span class="meta">' + "作者 " + '<a target="_blank" href="' + data.author_link + '">' + data.author + "</a>" + " 日期  " + data.time + "</span>"
    author.innerHTML = html;
    //添加背景图片
    console.log(data.img)
    //document.getElementById('page').style.backgroundImage = "url('" + data.img + "')";
    //添加文本内容
    var content = document.getElementById('content');
    html = '<div id = "content" class="col-lg-8 col-md-10 mx-auto">' +
    '<p>' + data.content + '</p></div>';
    content.innerHTML = html;
}
)