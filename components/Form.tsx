import { Text, View, TextInput, Button, StyleSheet, Alert } from "react-native"
import { useForm, Controller } from "react-hook-form"
import { useToast } from '@/components/ui/ToastProvider'

type FormData = {
  firstName: string
  lastName: string
};

export function Form() {
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  })

  const { showToast } = useToast();


  const onSubmit = (data: FormData) => {
    showToast('提交成功')
  }

  const onReset = (data: FormData) => {
    setValue('firstName', data.firstName)
    setValue('lastName', data.lastName)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>姓</Text>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="firstName"
        rules={{ required: true }}
      />
      <Text style={styles.label}>名</Text>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="lastName"
        rules={{ required: true }}
      />

      <View style={styles.button}>
        <Button
          style={styles.buttonInner}
          color
          title="重置"
          onPress={() => {
            onReset({
              firstName: 'Bill',
              lastName: 'Luo'
            })
          }}
        />
      </View>

      <View style={styles.button}>
        <Button
          style={styles.buttonInner}
          color
          title="提交"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: 'white',
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: 'white',
    height: 40,
    backgroundColor: '#ec5990',
    borderRadius: 4,
  },
  buttonInner: {
    color: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 10,
    padding: 8,
    backgroundColor: '#0e101c',
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'none',
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});