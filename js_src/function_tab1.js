/**
 *
 * 1. �̺�Ʈ
 *
 * 2. ��� - �Լ�
 *
 */

$(function(){

    // on Ŭ���� �߰� - tab, tab-content
    function tabOn( $tab, index ){

        $tab.siblings().removeClass('on');
        $tab.addClass('on');

        var $tabContent = $('.tab-content').eq(index);

        $tabContent.siblings().removeClass('on');
        $tabContent.addClass('on');

    }

    $('.tab-menu-list').on('click', function(){

        var index = $(this).index('.tab-menu-list');

        tabOn( $(this), index );

    });

});
