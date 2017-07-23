var app = {};
app.defaultDuration = 300;
app.isLoaded = false;

app.Router = Backbone.Router.extend({
	routes: {
		'(overview)': 'overview',
		'project/:project': 'projectDetails',
	},
	
	overview: function() {
		if (!app.isLoaded) {
			app.$overviewBlock.show();
			app.isLoaded = true;
		} else {
			app.$overviewBlock.slideDown(app.defaultDuration);
			app.$detailsBlock.slideUp(app.defaultDuration);
		}
	},
	
	projectDetails: function(project) {
		$('.project-details').hide();
		$('#' + project).show();
		if (!app.isLoaded) {
			app.$detailsBlock.show();
			app.isLoaded = true;
		} else {
			app.$overviewBlock.slideUp(app.defaultDuration);
			app.$detailsBlock.slideDown(app.defaultDuration);
		}
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
	
	/*
	setInterval(function() {
		$(app.$profilePictures[app.currentProfPic]).removeClass('shown');
		app.currentProfPic = (app.currentProfPic + 1) % 3;
		$(app.$profilePictures[app.currentProfPic]).addClass('shown');
	}, 10000);
	*/
});