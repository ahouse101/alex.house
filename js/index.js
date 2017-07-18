$(function() {
	$('.project-card').click(showProjectDetails);
});

function showProjectDetails(ev) {
	var refID = $(ev.currentTarget).data('ref');
	var $projects = $('.projects');
	//$projects.css('left', (-1 * $projects.width() - 30) + 'px');
	$projects.slideUp();
	$('#' + refID).slideDown();
}