var test = require('tape');
var Github = require('../');

if (process.browser) require('console-log').show(true);

test("Issues from non-existant repo", function issuesTest(t) {
  var github = new Github({});

  var issues = github.getIssues("jlord", "googleslied");
  issues.list({}, function(err, issues) { 
    t.true(err, "No error");
    t.equal(err.request.status, 404, "Status is 404");
    t.end();
  });
});

test("Issues from actual repo", function issuesTest(t) {
  var github = new Github({});

  var issues = github.getIssues("joyent", "node");
  issues.list({}, function(err, issues) { 
    t.true(!err, "Has no errors") 
    // console.log(issues)
    t.true(Array.isArray(issues), "Returned array")
    t.end()
  });
});