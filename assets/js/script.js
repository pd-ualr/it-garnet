var filterActive;

function filterCategory(category) {
  if (filterActive != category) {
    // reset results list
    $(".filter-cat-results .f-cat").removeClass("active");

    // elements to be filtered
    $(".filter-cat-results .f-cat")
      .filter('[data-cat="' + category + '"]')
      .addClass("active");

    // reset active filter
    filterActive = category;
    $(".filtering button").removeClass("active");
  }
}

$(".f-cat").addClass("active");

$(".filtering button").click(function () {
  if ($(this).hasClass("cat-all")) {
    $(".filter-cat-results .f-cat").addClass("active");
    filterActive = "cat-all";
    $(".filtering button").removeClass("active");
  } else {
    filterCategory($(this).attr("data-cat"));
  }
  $(this).addClass("active");
});


// button select

var button = document.getElementsByClassName("button");

var addSelectClass = function () {
  removeSelectClass();
  this.classList.add("selected");
};

var removeSelectClass = function () {
  for (var i = 0; i < button.length; i++) {
    button[i].classList.remove("selected");
  }
};

for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", addSelectClass);
}