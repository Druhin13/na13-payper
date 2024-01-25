$(".date-0").each(function () {
    var date = $(this).text();
    var parts = date.split(".");
    if (parts.length === 3) {
      var day = parts[0].padStart(2, "0");
      var month = parts[1].padStart(2, "0");
      var year = parts[2];
      var formattedDate = `${day}.${month}.${year}`;
      $(this).text(formattedDate);
    }
  });
  