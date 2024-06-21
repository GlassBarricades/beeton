import { useForm, isNotEmpty } from '@mantine/form'
import { TextInput, Button } from '@mantine/core'

const CallForm = () => {

	interface IDataObj {
		name: string
		phone: string
	}

	const form = useForm<IDataObj>({
		initialValues: {
		name: '',
		phone: '',
	},
		validate: {
			name: isNotEmpty('Поле не должно быть пустым'),
            phone: isNotEmpty('Поле не должно быть пустым'),
		},
	})

	return (
		<form
        onSubmit={form.onSubmit((values) => {
            fetch("", {
              method: "POST",
              mode: "no-cors",
              headers: {
                "Content-type":
                  "application/x-www-form-urlencoded; application/json; charset=UTF-8",
              },
              body: "paramm=" + JSON.stringify(values),
            })
              .then((response) => {
                if (!response.ok) {
                  throw new Error("Ошибка HTTP: " + response.status);
                }
                return response;
              })
              .catch((error) => {
                alert(error.message);
              });
          })}
		>
			<TextInput
          placeholder="Имя"
          label="Имя"
          name="name"
          {...form.getInputProps("name")}
          withAsterisk
        />
        <TextInput
          placeholder="Телефон"
          label="Телефон"
          {...form.getInputProps("phone")}
          withAsterisk
        />
			<Button mt='md' type='submit' variant="default" radius={0} size="md">
				Отправить
			</Button>
		</form>
	)
}
export default CallForm