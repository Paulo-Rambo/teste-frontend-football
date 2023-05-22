import * as yup from "yup";

export const validateTokenSchema = yup.object().shape({
  key: yup.string().required("Coloque a chave!"),
});
