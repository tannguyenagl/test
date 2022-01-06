const ERROR = {
  REQUIRED: (name) => `${name} is required`,
  PATTERN: (name) => `${name} is invalid`,
  MIN_LENGTH: (name, length) =>
    `${name} should be at least ${length} characters`,
};

export default ERROR;
