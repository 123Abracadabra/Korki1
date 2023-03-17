// smooth scroll to anchor links
$(document).ready(function() {
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var target = this.hash;
    var $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 900, 'swing', function() {
      window.location.hash = target;
    });
  });
});

<div class="course">
  <img src="course1.jpg" alt="Course 1">
  <div class="course-text">
    <h3>Popular Courses</h3>
  </div>
  <h3>Course 1</h3>
  <p>Description of course 1.</p>
  <a href="#" class="button">Enroll Now</a>
</div>
