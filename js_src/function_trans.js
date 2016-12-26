/**
 *
 * javascript coding �ܰ�
 *
 * 1. 2���� ī�װ� ����
 *
 *  1) �̺�Ʈ
 *
 *  2) ��� - �Լ�
 *
 */

$(function(){

    /**
     * �ʿ��� ��� - �ʱ�ȭ ���, ����޴��� �����ִ� ���, ����޴��� ����� ���, ȭ��ǥ�� ���������� �����ϴ� ���, ȭ��ǥ�� �Ʒ��� �����ϴ� ���
     *
     */

    // �ʱ�ȭ �Լ�
    function menuTransInit(){
        $('.transition-1depth-link').data({'open' : 'false'});

        $('.acc-2depth-transition').each(function(index){

            $(this)
                .data({'height' : $(this).height()})
                .css({height:0});
        });
    }

    // ����޴� �����ִ� �Լ�
    function menuTransOn( $depth1 ){
        // $(this) => depth1

        var $currentSiblingsChildrenSub = $depth1.parent().siblings().children('.acc-2depth-transition');
        var $currentNextSub = $depth1.next('.acc-2depth-transition');

        $currentSiblingsChildrenSub.css({height : 0});
        $currentNextSub.css({height : $currentNextSub.data('height')});
    }

    // ����޴� ����� �Լ�
    function menuTransOff( $depth1 ){

        var $currentNextSub = $depth1.next('.acc-2depth-transition');

        $currentNextSub.css({height : 0});
    }

    // ȭ��ǥ �Ʒ��� �����ϴ� �Լ�
    function arrowTransOn( $depth1 ){

        var $currentSiblingsChildrenAnchor = $depth1.parent().siblings().children('.transition-1depth-link');

        $currentSiblingsChildrenAnchor.removeClass('on');
        $depth1.addClass('on');
    }

    // ȭ��ǥ ������ �����ϴ� �Լ�
    function arrowTransOff( $depth1 ){
        $depth1.removeClass('on');
    }

    // �ʱ�ȭ �Լ� ����
    menuTransInit();

    $('.transition-1depth-link').on('click', function(e){
        // Ŭ������ �� ����

        e.preventDefault();

        if( $(this).data('open') == 'false' ){

            menuTransOn( $(this) );
            arrowTransOn( $(this) );

            $(this).data({'open' : 'true'});

        } else {

            menuTransOff( $(this) );
            arrowTransOff( $(this) );

            $(this).data({'open' : 'false'});

        }


    });

});
