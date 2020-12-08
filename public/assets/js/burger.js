// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".burger_id").hide();
  $(".devoured").on("click", function (event) {
    event.preventDefault();
    var id = $(this).next().text();
    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
    }).then(function () {
      console.log("updated burger", id);
    });
    // Reload the page to get the updated list
    location.reload();
  });

  $("#submitBtn").on("click", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newCat = {
      burger_name: $("#ca").val().trim(),
      devoured: false,
    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newCat,
    }).then(function () {
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".delete").on("click", function (event) {
    event.preventDefault();
    var id = $(this).next().text();

    // Send the DELETE request.
    $.ajax("/api/burger/" + id, {
      type: "DELETE",
    }).then(function () {
      console.log("deleted burger", id);
    });
    // Reload the page to get the updated list
    location.reload();
  });
});
