// ************************************************* //
// * +++++++++++ Fixed header ++++++++++++ * //
// ************************************************* //

$(window).on('scroll', function() {
    if($(this).scrollTop() > 250 ) {
      $(".aul__header").addClass("fixed__header");
    } else {
      $(".aul__header").removeClass("fixed__header");
    }
  });



// ************************************************* //
// * +++++++++++ Form Validation ++++++++++++ * //
// ************************************************* //
  const totalSteps = 19;
  const stepValidations = {
    1: {
      fieldId: 'loanAmount',
      errorId: 'loanAmount-error',
      validate: (value) => value && parseInt(value) >= 100,
    },
    2: {
      fieldId: 'loanPurpose',
      errorId: 'purpose-error',
      validate: (value) => !!value,
    },
    3: {
      inputName: 'creditScore',
      errorId: 'creditScore-error',
      isRadio: true,
    },
    4: {
      inputName: 'employmentStatus',
      errorId: 'employment-error',
      isRadio: true,
    },
    5: {
      inputName: 'paymentSchedule',
      errorId: 'payment-error',
      isRadio: true,
    },
    6: {
      fieldId: 'IncomeAmount',
      errorId: 'incomeAmount-error',
      validate: (value) => value && parseInt(value) >= 100,
    },
    7: {
      inputName: 'checkingAccount',
      errorId: 'checkingAccount-error',
      isRadio: true,
    },
    8: {
      inputName: 'deposit',
      errorId: 'directDeposit-error',
      isRadio: true,
    },
    // 9: {
    //   custom: () => {
    //     const mode = document.querySelector('input[name="addressOption"]:checked')?.value;
    //     let isValid = true;

    //     if (mode === 'autofill') {
    //       const address = document.getElementById('address');
    //       const error = document.getElementById('address-error');
    //       if (!address.value.trim()) {
    //         error.style.display = 'block';
    //         isValid = false;
    //       } else {
    //         error.style.display = 'none';
    //       }
    //     } else if (mode === 'manual') {
    //       ['city', 'county', 'zip'].forEach(id => {
    //         const field = document.getElementById(id);
    //         field.classList.remove('is-invalid');
    //         if (!field.value.trim()) {
    //           field.classList.add('is-invalid');
    //           isValid = false;
    //         }
    //       });
    //     }
    //     return isValid;
    //   }
    // },
    10: {
      type: 'radio',
      name: 'homeowner',
      errorId: 'homeOwner-error'
    },
    11: {
      type: 'radio',
      name: 'cuurentplace',
      errorId: 'currentPlace-error'
    },
    12: {
      type: 'email',
      id: 'email',
      errorId: 'email-error'
    },
    13: {
      type: 'radio',
      name: 'regvehicle',
      errorId: 'registerVehicle-error'
    },
    14: {
      type: 'radio',
      name: 'service',
      errorId: 'militaryAffilation-error'
    },
    15: {
      type: 'radio',
      name: 'debtamount',
      errorId: 'debtAmount-error'
    },
    16: {
      type: 'name',
      ids: ['firstname', 'lastname'],
      errorId: 'name-error'
    },
    17: {
      type: 'date',
      id: 'dob',
      errorId: 'date-error'
    },
    18: {
      type: 'phone',
      id: 'phonenumber',
      errorId: 'number-error'
    },
    19: {
      type: 'ssn',
      id: 'socialnumber',
      errorId: 'number-error'
    }
    // Add more steps as needed...
  };

  function showStep(stepToShow) {
    for (let i = 1; i <= totalSteps; i++) {
      const step = document.getElementById(`step-${i}`);
      if (step) step.classList.toggle('d-none', i !== stepToShow);
    }
    updateProgressBar(stepToShow);
  }

  function nextStep(currentStep) {
    let valid = true;
    const validation = stepValidations[currentStep];

    if (validation) {
      const { fieldId, inputName, errorId, validate, isRadio } = validation;
      const error = document.getElementById(errorId);

      if (isRadio && inputName) {
        const radios = document.querySelectorAll(`input[name="${inputName}"]`);
        if (![...radios].some(r => r.checked)) {
          if (error) error.style.display = 'block';
          valid = false;
        } else {
          if (error) error.style.display = 'none';
        }
      } else if (fieldId && validate) {
        const field = document.getElementById(fieldId);
        if (!validate(field.value)) {
          if (error) error.style.display = 'block';
          valid = false;
        } else {
          if (error) error.style.display = 'none';
        }
      }
    }

    if (valid && currentStep < totalSteps) {
      showStep(currentStep + 1);
    }
  }

  function previousStep(currentStep) {
    if (currentStep > 1) {
      showStep(currentStep - 1);
    }
  }

  function updateProgressBar(step) {
    const progress = Math.round((step / totalSteps) * 100);
    const progressBar = document.querySelector('.progress-bar');
    const progressNum = document.querySelector('.aul__progress-num');

    if (progressBar) {
      progressBar.style.width = `${progress}%`;
      progressBar.setAttribute('aria-valuenow', progress);
    }
    if (progressNum) {
      progressNum.textContent = `${progress}%`;
    }
  }

  // Handle form submit only on step 19
  document.getElementById('loanForm').addEventListener('submit', function (e) {
    const currentVisibleStep = [...document.querySelectorAll('[id^="step-"]')]
      .find(step => !step.classList.contains('d-none'));

    const stepId = parseInt(currentVisibleStep?.id?.split('-')[1]);

    if (stepId !== 19) {
      e.preventDefault(); // block submission
      nextStep(stepId);   // move to next step instead
    } else {
      // Final step validation
      const radios = document.querySelectorAll('input[name="employmentStatus"]');
      const error = document.getElementById('employment-error');
      if (![...radios].some(r => r.checked)) {
        error.style.display = 'block';
        e.preventDefault();
      } else {
        error.style.display = 'none';
        alert("Form submitted successfully!");
      }
    }
  });

  // Address toggle (manual vs autofill)
  document.querySelectorAll('input[name="addressOption"]').forEach((radio) => {
    radio.addEventListener('change', function () {
      const isManual = this.value === 'manual';
      document.getElementById('autofillSection').style.display = isManual ? 'block' : 'none';
      document.getElementById('manualSection').style.display = isManual ? 'none' : 'flex';
    });
  });
