export const projectValidation = {
  name: {
    required: "Project name required",

    minLength: {
      value: 3,
      message: "Minimum 3 characters",
    },

    maxLength: {
      value: 100,
      message: "Maximum 100 characters",
    },
  },

  description: {
    required: "Description required",

    minLength: {
      value: 10,
      message: "Minimum 10 characters",
    },

    maxLength: {
      value: 1000,
      message: "Maximum 1000 characters",
    },
  },

  image: (editMode) => ({
    required: !editMode ? "Project image is required" : false,

    validate: (value) => {
      const file = value?.[0];

      if (
        file &&
        !["image/jpeg", "image/png", "image/jpg"].includes(file.type)
      ) {
        return "Only JPG, JPEG and PNG allowed";
      }

      if (file && file.size > 2 * 1024 * 1024) {
        return "Image must be less than 2MB";
      }

      return true;
    },
  }),
};
