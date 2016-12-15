'use strict';


function JobResume(jobs) {
  for (var key in jobs) {
    this[key] = jobs[key];
  }
};
JobResume.jobHistories = [];

JobResume.prototype.toHtml = function () {
  var $source = $('#resume-template').html();
  var templateRender = Handlebars.compile($source);
  return templateRender(this);
};

JobResume.loadAll = function(inputData) {
  inputData.forEach(function(ele) {
    JobResume.jobHistories.push(new JobResume(ele));
  });
};

// resume.forEach(function(jobResumeObj) {
//   jobHistories.push(new JobResume(jobResumeObj));
// });

// jobHistories.forEach(function(jobResumeObj) {
//   $('#jobHistories').append(jobResumeObj.toHtml());
// });

JobResume.fetchAll = function() {
  if (localStorage.resumeScript) {
    JobResume.loadAll(JSON.parse(localStorage.resumeScript));
    resumeHandle.renderIndexPage();
  }
  else {
    $.getJSON('data/resumeScript.json', function(data) {
      localStorage.resumeScript = JSON.stringify(data);
      // JobResume.loadAll(JSON.parse(localStorage.resumeScript));
      resumeHandle.renderIndexPage();
    });
  };
};
