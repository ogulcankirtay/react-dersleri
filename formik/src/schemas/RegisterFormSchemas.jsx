import * as  yup from 'yup'

export const registerFormSchemas =yup.object().shape({
    email: yup.string().email("Geçerli email giriniz").required("Email adresi zorunlu"),
    age: yup.number().positive("yaşınız 0 dan küçük olamaz").required("Yaş alanı zorunludur").integer("Tam sayı giriniz"),
    password: yup.string().required("şifre alanı zorunludur"),
    confirmPassword: yup.string().required("Şifre Tekrar zorunludur").oneOf([yup.ref("password",yup.password)],"Şifreler aynı olmak zorundadır"),
    term: yup.boolean().required("lütfen sözleşmeyi onaylayınız")
}) 