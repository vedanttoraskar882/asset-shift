export interface PilotFormData {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  organisationName: string;
}

export interface PilotSubmission extends PilotFormData {
  submissionDateTime: string;
}

const STORAGE_KEY = "assetshift_pilot_submissions";

function isPilotSubmission(
  value: unknown
): value is PilotSubmission {
  if (!value || typeof value !== "object") {
    return false;
  }

  const record = value as Record<string, unknown>;

  return (
    typeof record.fullName === "string" &&
    typeof record.phoneNumber === "string" &&
    typeof record.emailAddress === "string" &&
    typeof record.organisationName === "string" &&
    typeof record.submissionDateTime === "string" &&
    !Number.isNaN(Date.parse(record.submissionDateTime))
  );
}

export function getPilotSubmissions(): PilotSubmission[] {
  const stored = localStorage.getItem(STORAGE_KEY);

  if (stored === null) {
    return [];
  }

  let parsed: unknown;

  try {
    parsed = JSON.parse(stored);
  } catch {
    throw new Error(
      "Existing local data could not be read. " +
      "Previous submissions have not been changed."
    );
  }

  if (
    !Array.isArray(parsed) ||
    !parsed.every(isPilotSubmission)
  ) {
    throw new Error(
      "Existing local data has an unexpected format. " +
      "Previous submissions have not been changed."
    );
  }

  return parsed;
}

export function validatePilotForm(
  formData: PilotFormData
): Record<string, string> {
  const errors: Record<string, string> = {};

  const fullName = formData.fullName.trim();
  const phoneNumber = formData.phoneNumber.trim();
  const emailAddress = formData.emailAddress.trim();
  const organisationName =
    formData.organisationName.trim();

  if (!fullName) {
    errors.fullName = "Please enter your full name.";
  }

  const phoneDigits = phoneNumber.replace(/\D/g, "");

  if (
    !/^\+?[\d\s()-]+$/.test(phoneNumber) ||
    phoneDigits.length < 7 ||
    phoneDigits.length > 15
  ) {
    errors.phoneNumber =
      "Please enter a valid phone number.";
  }

  if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress)
  ) {
    errors.emailAddress =
      "Please enter a valid email address.";
  }

  if (!organisationName) {
    errors.organisationName =
      "Please enter your organisation name.";
  }

  return errors;
}

export function savePilotSubmission(
  formData: PilotFormData
): PilotSubmission {
  const errors = validatePilotForm(formData);

  if (Object.keys(errors).length > 0) {
    throw new Error(
      "Please correct the invalid form fields."
    );
  }

  const newSubmission: PilotSubmission = {
    fullName: formData.fullName.trim(),
    phoneNumber: formData.phoneNumber.trim(),
    emailAddress: formData.emailAddress.trim(),
    organisationName: formData.organisationName.trim(),
    submissionDateTime: new Date().toISOString()
  };

  const existingSubmissions = getPilotSubmissions();

  const updatedSubmissions = [
    ...existingSubmissions,
    newSubmission
  ];

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updatedSubmissions)
  );

  return newSubmission;
}
