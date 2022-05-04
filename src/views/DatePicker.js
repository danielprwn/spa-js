//Return date, arrival and departure

const DAY_IN_MILLIS = 1000 * 60 * 60 * 24;

const updateTotal = function () {
  const form = document.forms["booking"];
  const goingRate = form.elements["going-rate"].valueAsNumber;
  const arrivalDate = $(form.elements["arrival-date"]).datepicker("getDate");
  const departureDate = $(form.elements["departure-date"]).datepicker(
    "getDate"
  );

  if (arrivalDate && departureDate) {
    const days = Math.ceil((departureDate - arrivalDate) / DAY_IN_MILLIS);
    const total = goingRate * days;
    $(form.elements.total).val(total.toFixed(2));
  }
};

$(".datepicker").datepicker({
  minDate: new Date(),
  onSelect: function (date, datepicker) {
    updateTotal();
  },
});
