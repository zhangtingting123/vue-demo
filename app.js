/**
 * Created by zhangtingting on 2016/3/5.
 */

window.onload=function(){
    var pH=document.documentElement.clientHeight;
    var timer=null;
    var scrollTop;
    scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    window.onscroll=function(){
        scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
        return scrollTop;
    };
    Vue.transition('expand');
   var vm = new Vue({
        el: '#Dialogue',
        data:{
            show: false,
            items:[
                {message:'<span class="file-ico"></span><p>文件</p>'},
                {message:'<span class="packet-ico"></span><p>红包</p>'},
                {message:'<span class="card-ico"></span><p>名片</p>'},
                {message:'<span class="video-ico"></span><p>视频</p>'},
                {message:'<span class="voice-ico"></span><p>语音</p>'}
            ],
            newTodo:'',
            txts:[
                {message:'<li><div class="avatar-img"> <img src="images/avatar.jpg"/></div>'+
                            '<div class="dialogue-con">'+
                                '<h3>李秋水<span>05-05 11:12</span></h3>'+
                             '<div class="sub-txt">'+
                             '<p>大家都在吗？春节聚餐怎么搞</p></div> </div></li>'},
                {message:'<li><div class="avatar-img">'+
                            '<img src="images/avatar.jpg"/>'+
                          '</div>'+
                          '<div class="dialogue-con">'+
                              '<h3>张菲<span>05-05 11:12</span></h3>'+
                              '<div class="sub-txt">'+
                              '<p>我在！</p></div></div></li>'},
                {message:'<li><div class="avatar-img">'+
                '<img src="images/avatar.jpg"/>'+
                '</div>'+
                '<div class="dialogue-con">'+
                '<h3>张菲<span>05-05 11:12</span></h3>'+
                '<div class="sub-txt">'+
                '<p>我在！</p></div></div></li>'},
                {message:'<li class="dialogue-me"><div class="avatar-img">'+
                            '<img src="images/avatar.jpg"/>'+
                            '</div>'+
                                '<div class="dialogue-con">'+
                                    '<h3><span>05-05 11:12</span></h3>'+
                                    '<div class="sub-txt">'+
                                        '<p>我也在！</p></div></div></li>'},
                {message:'<li><div class="avatar-img">'+
                            '<img src="images/avatar.jpg"/>'+
                            '</div>'+
                            '<div class="dialogue-con">'+
                                '<h3>张菲<span>05-05 11:12</span></h3>'+
                                '<div class="sub-txt">'+
                                    '<p>我老公！！</p>'+
                                    '<img src="images/pic.jpg"/></div></div> </li>'}
            ],
            addTodo:function(){
                var text = vm.newTodo.trim();
                var txtLiCon = "<li class='dialogue-me'><div class='avatar-img'><img src='images/avatar.jpg'/></div><div class='dialogue-con'><h3>张菲<span>05-05 11:12</span></h3><div class='sub-txt'><p>"+ text+"</p></div></div> </li>";
                if (text){
                    vm.txts.push({message: txtLiCon});
                    vm.newTodo = '';
                }
                clearInterval(timer);
                timer=setInterval(function(){
                    var now=scrollTop;
                    var speed=(now-0)/10;
                    speed=speed>0?Math.ceil(speed):Math.floor(speed);
                    if(scrollTop==pH){
                        clearInterval(timer);
                    }
                    document.documentElement.scrollTop=scrollTop+speed;
                    document.body.scrollTop=scrollTop+speed;
                }, 50);
                window.scrollTo(pH,pH);
                return false;
            }
        }
    });

    var ImgTag = document.getElementsByClassName('sub-txt')[4].getElementsByTagName('img')[0];
   // alert(ImgTag);
   /* ImgTag.onclick = function(){
        alert(123);
    };*/
    var picBid = document.getElementsByClassName('sub-txt').length;
     for(var i=0; i< picBid; i++){
         if(document.getElementsByClassName('sub-txt')[i].getElementsByTagName('img')){
             var element =document.getElementsByClassName('sub-txt')[i];
             var imgLength = document.getElementsByClassName('sub-txt')[i].getElementsByTagName('img').length;
             for(var j=0; j <imgLength; j++){
                 var ImgTag = document.getElementsByClassName('sub-txt')[i].getElementsByTagName('img')[j];
                 ImgTag.onclick = function(){
                     var imgParent = document.createElement('div');
                     imgParent.className='loading';
                     var child=document.getElementsByClassName("loading")[0];
                     if(this.className==''){
                         this.className='Bigimg';
                         var imgMargin = (window.innerHeight - this.height)/2;
                         this.style.marginTop = imgMargin +'px';
                         this.parentNode.appendChild(imgParent);

                     }else{
                         this.className='';
                         this.style.marginTop ='.5rem';
                         this.parentNode.removeChild(child);
                     }
                 };
             }
         }
     }
} ;