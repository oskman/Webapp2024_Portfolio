import { useState, FormEvent } from "react";


type UseFormProps<T> = {
    initialValues: T;
    onSubmit: (data: T) => Promise<void>; 
  };
  
  export function useForm<T>({ initialValues, onSubmit }: UseFormProps<T>) {
    const [formVals, setFormVals] = useState<T>(initialValues);
  
    const handleChange = (field: keyof T) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormVals({
        ...formVals,
        [field]: event.target.value,
      });
    };
  
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      try {
        await onSubmit(formVals); 
        resetForm();
      } catch (error) {
        console.error("Submit error:", error); 
      }
    };
  
    const resetForm = () => setFormVals(initialValues);
  
    return {
      formVals,
      handleChange,
      handleSubmit,
    };
  }

        
        
    