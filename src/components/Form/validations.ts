import * as Yup from "yup";

const veryIfHasOnlyLetterNumbersAndSpaces = /^[a-zA-Z\s]*$/g;

const verifyHasOnlyLetterAndSpaces = /^[a-zA-Z\s]*$/;

export const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required("Campo obrigatório")
    .matches(verifyHasOnlyLetterAndSpaces, "Contém caracteres invalidos"),
  salary: Yup.number().required("Campo obrigatório"),
  activities: Yup.string()
    .required("Campo obrigatório")
    .matches(verifyHasOnlyLetterAndSpaces, "Contém caracteres invalidos"),
  benefits: Yup.string()
    .required("Campo obrigatório")
    .matches(
      veryIfHasOnlyLetterNumbersAndSpaces,
      "Contém caracteres invalidos"
    ),
  steps: Yup.string()
    .required("Campo obrigatório")
    .matches(
      veryIfHasOnlyLetterNumbersAndSpaces,
      "Contém caracteres invalidos"
    ),
  skills: Yup.string()
    .required("Campo obrigatório")
    .matches(verifyHasOnlyLetterAndSpaces, "Contém caracteres invalidos"),
  experiences: Yup.string()
    .required("Campo obrigatório")
    .matches(
      veryIfHasOnlyLetterNumbersAndSpaces,
      "Contém caracteres invalidos"
    ),
});
