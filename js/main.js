'use strict';

//도어락 제어 
$(function(){
    let pass1 = false;
    let pass2 = false;
    let pass3 = false;
    let pass4 = false;

    $("td").click(function(e){
        $(this).css("color","green");
        let x = this.id;
        // alert(this.id);
        function wrong(){
            pass1 = false;
            pass2 = false;
            pass3 = false;
            pass4 = false;
            alert("땡");
            $("td").css("color","rgba(255,255,255,0.1)");
            //비밀번호 틀렸을때 사용할 함수
        }

        
        if( pass1 == false){ // 처음 누른 비밀번호
            if( x == "td11"){    //누른 버튼을 체크한다2번
                pass1 = true;   //1번 비밀번호 체크
                // alert("정답1");
                return;
            }
            else {
                wrong();    // 변수초기화할 필요는 없으나 혹시모를 버그방지
            }
        }
        if( (pass1 == true) && (pass2 == false)){  // 두번째로 누르는 비밀번호
            if( x == "td9"){    
                pass2 = true;
                // alert("정답2");
                return;
            }
            else {
                wrong();
            }
        }
        if( (pass1 == true) && (pass2 == true) && ( pass3 == false)){    //세번째로 누르는 비밀번호
            if ( x == "td1"){
                pass3 = true;
                // alert("정답3");
                return;
            }
            else {
                wrong();
            }
        }
        if( (pass1==true) && (pass2==true) && (pass3==true)){
            if( x == "td8"){
                pass4 = true;
                alert("띠리링");
            }
            else {
                wrong();
            }
        }
        if (pass4 == true){
            $(".doorlock").css("display","none");
            return false;
        }
    });


    //숨어있는 도어락 나타내기
    $('.doorLock2').click(function(){
        $('.hidden').addClass('gg');
    });

    $('.deco').click(function(){
        $('.hidden').removeClass('gg');
    });




//팝업창 띄우기
    $('.moniter').click(function(){
        $('.hidden2').addClass('sup');
    });
    $('.close-btn').click(function(){
        $('.hidden2').removeClass('sup');
    });

    $('.coffee').click(function(){
        $('.hidden3').addClass('sup');
    });
    $('.close-btn').click(function(){
        $('.hidden3').removeClass('sup');
    });

    $('.refe').click(function(){
        $('.hidden4').addClass('sup');
    });
    $('.close-btn').click(function(){
        $('.hidden4').removeClass('sup');
    });

    $('.man').click(function(){
        $('.hidden5').addClass('sup');
    });
    $('.close-btn').click(function(){
        $('.hidden5').removeClass('sup');
    });
});