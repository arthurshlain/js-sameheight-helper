function sameHeight() {
    $('.same-height-group-heading').each(function () {
        var sameHeightGroup = $(this);
        var sameHeightDivs = sameHeightGroup.find('.same-height-heading');
        var maxHeight = 0;
        sameHeightDivs.css('height', 'auto');
        sameHeightDivs.each(function () {
            if ($(this).height() > maxHeight) {
                maxHeight = $(this).height();
            }
        });
        sameHeightDivs.height(maxHeight);
    });
    $('.same-height-group').each(function () {
        var sameHeightGroup = $(this);
        var sameHeightDivs = sameHeightGroup.find('.same-height');
        var maxHeight = 0;
        sameHeightDivs.css('height', 'auto');
        sameHeightDivs.each(function () {
            if ($(this).height() > maxHeight) {
                maxHeight = $(this).height();
            }
        });
        sameHeightDivs.height(maxHeight);
    });
}
