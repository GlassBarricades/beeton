import { useForm } from "@mantine/form";
import { TextInput, Button } from "@mantine/core";
import writeToDatabase from "../../helpers/writeToDataBase";
import submitChangeDataBase from "../../helpers/submitChangeDataBase";
import { closeModal } from "../../store/editSlice";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";

interface IDataObj {
  mainImage: string;
  heroText: string;
  logo: string;
  logoDarkTheme: string;
  phone: string;
  adress: string;
  adressLink: string;
  email: string;
}

const AdminMainSettingsForm = () => {
  const edit = useAppSelector((state) => state.edit.edit);
  const editData = useAppSelector((state) => state.edit.editData);
  const editUuid = useAppSelector((state) => state.edit.editUuid);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (edit) {
      form.setValues({
        mainImage: editData.mainImage,
        heroText: editData.heroText,
        logo: editData.logo,
        logoDarkTheme: editData.logoDarkTheme,
        phone: editData.phone,
        adress: editData.adress,
        adressLink: editData.adressLink,
        email: editData.email,
      });
    }
  }, [edit]);

  const form = useForm<IDataObj>({
    initialValues: {
      mainImage: "",
      heroText: "",
      logo: "",
      logoDarkTheme: "",
      phone: "",
      adress: "",
      adressLink: "",
      email: "",
    },
  });

  return (
    <form
      onSubmit={
        !edit
          ? form.onSubmit((values) =>
              writeToDatabase(
                `/mainsettings/`,
                { ...values },
                form.reset,
                () => dispatch(closeModal()),
                false
              )
            )
          : form.onSubmit((values) => {
              submitChangeDataBase(
                values,
                `/mainsettings/`,
                editUuid,
                form.reset,
                () => dispatch(closeModal())
              );
            })
      }
    >
      <TextInput
        placeholder="Картинка на первом экране"
        label="Картинка на первом экране"
        withAsterisk
        {...form.getInputProps("mainImage")}
      />
      <TextInput
        placeholder="Текст на первом экране"
        label="Текст на первом экране"
        withAsterisk
        {...form.getInputProps("heroText")}
      />
      <TextInput
        placeholder="Логотип"
        label="Логотип"
        withAsterisk
        {...form.getInputProps("logo")}
      />
      <TextInput
        placeholder="Логотип для темной темы"
        label="Логотип для темной темы"
        withAsterisk
        {...form.getInputProps("logoDarkTheme")}
      />
	  <TextInput
        placeholder="телефон"
        label="Телефон"
        withAsterisk
        {...form.getInputProps("phone")}
      />
	  <TextInput
        placeholder="Адрес"
        label="Адрес"
        withAsterisk
        {...form.getInputProps("adress")}
      />
	  <TextInput
        placeholder="Ссылка на яндекс карты"
        label="Ссылка на яндекс карты"
        withAsterisk
        {...form.getInputProps("adressLink")}
      />
	  <TextInput
        placeholder="Электронная почта"
        label="Электронная почта"
        withAsterisk
        {...form.getInputProps("email")}
      />
      <Button mt="md" type="submit" variant="default" radius={0} size="md">
        {edit ? "Сохранить" : "Отправить"}
      </Button>
    </form>
  );
};
export default AdminMainSettingsForm;
