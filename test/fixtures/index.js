(function () {
  const efo = new Efo({
    target: document.getElementById('form'),
    data: {
      leaveTransitionSec: 300,
      tests: {
        name(el) {
          if (el.value.length >= 3) {
            return [true];
          }
          return [false, 'Three or more characters are required'];
        },
        email(el) {
          const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if (re.test(el.value)) {
            return [true];
          }
          return [false, 'Invalid email'];
        },
        address(el1, el2) {
          const val = el1.value + '-' + el2.value;
          const re = /^\d{3}-\d{4}/;
          if (re.test(val)) {
            return [true];
          }
          return [false, 'Invalid address'];
        },
        country(el) {
          if (el.value.length >= 3) {
            return [true];
          }
          return [false, 'Three or more characters are required'];
        },
        contents(el) {
          if (el.value.length > 0) {
            return [true];
          }
          return [false, 'Input field is empty'];
        },
        agreement(el) {
          if (el.checked) {
            return [true];
          }
          return [false, 'Agreement is necessary to continue'];
        }
      }
    }
  });

  document.getElementById('submit-button').addEventListener('click', ev => {
    ev.preventDefault();

    const bool = efo.validate({
      scroll: true
    });

    if (bool) {
      form.submit();
    }
  });
})();
