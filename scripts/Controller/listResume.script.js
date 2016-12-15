'use strict';

var jobHistories = [];

function JobResume(jobs) {
  for (var key in jobs) {
    this[key] = jobs[key];
  }
};

JobResume.prototype.toHtml = function () {
  var $source = $('#resume-template').html();
  var templateRender = Handlebars.compile($source);
  return templateRender(this);
};

// resume.forEach(function(jobResumeObj) {
//   jobHistories.push(new JobResume(jobResumeObj));
// });

jobHistories.forEach(function(jobResumeObj) {
  $('#jobHistories').append(jobResumeObj.toHtml());
});

JobResume.fetchAll = function() {
  if (localStorage.resumeScript) {
    JobResume.loadAll(JSON.parse(localStorage.resumeScript));
    jobHistories.renderIndexPage();
  }
  else {
    $.getJSON('data/resumeScriptjson', function(data) {
      localStorage.resumeScript = JSON.stringify(data);
      JobResume.loadAll(JSON.parse(localStorage.resumeScript));
      jobHistories.renderIndexPage();
    });
  };
};

JobResume.fetchAll();
