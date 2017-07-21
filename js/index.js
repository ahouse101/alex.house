var app = {};
app.defaultDuration = 300;

app.Router = Backbone.Router.extend({
	routes: {
		'(overview)': 'overview',
		'project/:project': 'projectDetails',
	},
	
	overview: function() {
		$('.details-block').fadeOut(app.defaultDuration / 2, function() {
			app.$overviewBlock.fadeIn(app.defaultDuration / 2);
		});
	},
	
	projectDetails: function(project) {
		$('.project-details').hide();
		$('#' + project).show();
		app.$overviewBlock.fadeOut(app.defaultDuration / 2, function() {
			$('.details-block').fadeIn(app.defaultDuration / 2);
		});
	},
});

app.router = new app.Router();

$(function() {
	app.$aboutBlock = $('.about');
	app.$overviewBlock = $('.projects');
	app.$detailsBlock = $('.details-block');
	app.$detailsTitle = $('.details-block .block-title');
	app.$profilePictures = $('.prof-pic img');
	app.currentProfPic = 0;
	
	Backbone.history.start();
	
	// app.$aboutBlock.fadeIn(app.defaultDuration);
	
	$('.project-card').click(function(ev) {
		var refID = $(ev.currentTarget).data('ref');
		app.router.navigate('project/' + refID, { trigger: true });
	});
	
	$('.back-btn').click(function(ev) {
		app.router.navigate('overview', { trigger: true });
	});
	
	setInterval(function() {
		$(app.$profilePictures[app.currentProfPic]).removeClass('shown');
		app.currentProfPic = (app.currentProfPic + 1) % 3;
		$(app.$profilePictures[app.currentProfPic]).addClass('shown');
	}, 10000);
});