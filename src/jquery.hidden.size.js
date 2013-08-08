(function ($) {

	$.fn.hiddenSize = function () {
		var $this = $(this),
			currentDisplay = $this.css('display'),
			currentVisibility = $this.css('visibility'),
			size = {};

		$this.css({
			display: 'block',
			visibility: 'hidden'
		});

		size.height = $this.height();
		size.width = $this.width();

		$this.css({
			display: currentDisplay,
			visibility: currentVisibility
		});

		return size;
	};

})(jQuery);