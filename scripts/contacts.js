const contactModal = document.getElementById("contactModal");
const openDialog = document.getElementById("openDialog");
const closeDialog = document.getElementById("closeDialog");
const contactForm = document.getElementById("contactForm");
let lastActive = null;

openDialog.addEventListener("click", () => {
  lastActive = document.activeElement;
  contactModal.showModal();
  [...contactForm.elements].forEach((el) => {
    if (el.willValidate) {
      el.setCustomValidity("");
      el.classList.remove("invalid");
      el.setAttribute("aria-invalid", "false");
    }
  });
  contactModal.querySelector("input,select,textarea,button")?.focus();
});

closeDialog.addEventListener("click", () => {
  contactModal.close("cancel");
});

contactModal.addEventListener("close", () => {
  lastActive?.focus();
});

contactModal.addEventListener("click", (event) => {
  if (event.target === contactModal) {
    contactModal.close("cancel");
  }
});

function validateField(field) {
  if (!field.willValidate) return;
  field.setCustomValidity("");
  if (field.name === "email" && field.validity.typeMismatch) {
    field.setCustomValidity(
      "Введите корректный e-mail, например example@mail.ru"
    );
  }
  if (field.name === "phone" && field.validity.patternMismatch) {
    field.setCustomValidity(
      "Введите корректный номер телефона, например +79991234567"
    );
  }
  const isValid = field.checkValidity();
  field.classList.toggle("invalid", !isValid);
  field.setAttribute("aria-invalid", isValid ? "false" : "true");
}

[...contactForm.elements].forEach((field) => {
  if (field.willValidate) {
    field.addEventListener("input", () => validateField(field));
    field.addEventListener("blur", () => validateField(field));
  }
});

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  [...contactForm.elements].forEach((el) => el.setCustomValidity?.(""));

  if (!contactForm.checkValidity()) {
    const email = contactForm.elements.email;
    const phone = contactForm.elements.phone;
    if (email?.validity.typeMismatch) {
      email.setCustomValidity(
        "Введите корректный e-mail, например example@mail.ru"
      );
    }
    if (phone?.validity.patternMismatch) {
      phone.setCustomValidity(
        "Введите корректный номер телефона, например +79991234567"
      );
    }
    contactForm.reportValidity();
    [...contactForm.elements].forEach((el) => {
      if (el.willValidate) {
        const isValid = el.checkValidity();
        el.classList.toggle("invalid", !isValid);
        el.setAttribute("aria-invalid", isValid ? "false" : "true");
      }
    });
    return;
  }

  const formData = new FormData(contactForm);
  const data = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    category: formData.get("category"),
    message: formData.get("message"),
  };

  console.log("Form data:", data);
  alert(
    "Спасибо! Ваше обращение отправлено. Мы свяжемся с вами в ближайшее время."
  );
  contactModal.close("success");
  contactForm.reset();
});

contactForm.addEventListener("keypress", (event) => {
  if (event.key === "Enter" && event.target.type !== "textarea") {
    event.preventDefault();
  }
});
