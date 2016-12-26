// ���ڵ�� �޴� Ÿ�� 2

$(function(){

    function menuAnimateInit(){
        $('.animate-1depth-link').data({'open' : 'false'});

        $('.animate-2depth').each(function(index){

            $(this).data({
                'height' : $(this).height()
            }).css({
                height : 0
            });

        });
    }

    function menuAnimateOn( $depth1 ){
        $depth1.parent('.acc-1depth-item').siblings().children('.animate-2depth').stop().animate({
            height : 0
        });
        $depth1.parent('.acc-1depth-item').siblings().children('.animate-1depth-link').data({'open' : 'false'});
        $depth1.next('.animate-2depth').stop().animate({
            height : $depth1.next('.animate-2depth').data('height')
        });
    }

    function menuAnimateOff( $depth1 ){
        $depth1.next('.animate-2depth').stop().animate({
            height : 0
        });
    }

    function menuArrowAnimateOn( $depth1 ){
        $depth1.parent('.acc-1depth-item').siblings().children('.animate-1depth-link').removeClass('on').data({'open' : 'false'});
        $depth1.addClass('on');
    }

    function menuArrowAnimateOff( $depth1 ){
        $depth1.removeClass('on');
    }

    // �ʱ�ȭ �Լ� ����
    menuAnimateInit();

    // 1���� �޴� Ŭ���� ���� ����
    $('.animate-1depth-link').on('click', function(){

        if( $(this).data('open') == 'false' ){
            // ����
            menuArrowAnimateOn( $(this) );
            menuAnimateOn( $(this) );

            $(this).data({'open' : 'true'});

        } else {
            // �ݱ�
            menuArrowAnimateOff( $(this) );
            menuAnimateOff( $(this) );

            $(this).data({'open' : 'false'});
        }


    });

});