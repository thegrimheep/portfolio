'use strict';

var jobHistories = [];

function JobResume(jobs) {
  this.jobTitle = jobs.jobTitle;
  this.empName = jobs.empName;
  this.empLoc = jobs.empLoc;
  this.dateEmp = jobs.dateEmp;
  this.respon = jobs.respon;
};

JobResume.prototype.toHtml = function() {
  var $newJobResume = $('jobHistories.listJobs').clone();
  $newJobResume.find('jobTitle').html(this.jobTitle);
  $newJobResume.find('empName').html(this.empName);
  $newJobResume.find('empLoc').html(this.empLoc);
  $newJobResume.find('dateEmp').html(this.dateEmp);
  $newJobResume.find('respon').html(this.respon);
  return $newJobResume;
};

resume.forEach(function(jobResumeObj) {
  jobHistories.push(new JobResume(jobResumeObj));
});

jobHistories.forEach(function(jobResumeObj) {
  $('#jobHistories').append(jobResumeObj.toHtml());
});
