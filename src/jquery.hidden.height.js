(function ($) {

	$.fn.hiddenHeight = function () {
		var $this = $(this),
			currentDisplay = $this.css('display'),
			currentVisibility = $this.css('visibility'),
			height;

		$this.css({
			display: 'block',
			visibility: 'hidden'
		});

		height = $this.height();

		$this.css({
			display: currentDisplay,
			visibility: currentVisibility
		});

		return height;
	};

})(jQuery);