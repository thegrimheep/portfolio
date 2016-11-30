'use strict';

var jobHistories = [];

function JobResume(jobs) {
  this.jobTitle = jobs.jobTitle;
  this.empName = jobs.empName;
  this.empLoc = jobs.empLoc;
  this.dateEmp = jobs.dateEmp;
  this.respon = jobs.respon;
};

JobResume.prototype.toHTML = function() {
  var $newJobResume = $('jobHistories.listJobs').clone();
  $newJobResume.attr('data.category', this.jobTitle);
};
