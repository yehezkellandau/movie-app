import { useForm, Controller } from "react-hook-form"
import { object, string } from "yup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useYupValidationResolver from "@/hooks/useYupValidationResolver";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"

const validationSchema = object({
    username: string().required("email required"),
    password: string().required("password required")
})
type ValueType = {
    username: string;
    password:string;
}
const Login = () => {
    const resolver = useYupValidationResolver(validationSchema);
    const form = useForm({resolver});
    console.log(form)
    const onSubmit = (values:ValueType) => {
        console.log(values)
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
          <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
            <h1 className="text-2xl font-bold text-center text-gray-800">Login</h1>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-4">
                <FormField
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 text-base">Username</FormLabel>
                      <FormControl>
                        <Input type="text" {...field} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 text-base">Password</FormLabel>
                      <FormControl>
                        <Input type="password" {...field} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                  Sign in 
                </Button>
              </form>
            </Form>
          </div>
        </div>
      );
};
export default Login;

