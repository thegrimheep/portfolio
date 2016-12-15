var resumeHandle = {};

resumeHandle.renderIndexPage = function() {
  JobResume.jobHistories.forEach(function(a) {
    $('#jobHistories').append(a.toHtml('#resume-template'));
  });
};


JobResume.fetchAll();
