import { AdminClientEntityBuilderContainer } from './_container';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { GetEntityResult } from './_types';
import { useTransition } from 'react';

export const upsertEntityFormProvider =
  AdminClientEntityBuilderContainer.provider(
    ({
      deps: {
        action,
        config: { fields },
      },
    }) => {
      return function UpsertEntityForm({
        defaultValues,
        onSuccess,
      }: {
        defaultValues?: GetEntityResult;
        onSuccess: () => void;
      }) {
        const [isLoading, startTransition] = useTransition();
        const form = useForm({
          defaultValues: {
            ...defaultValues,
          },
        });
        const id = defaultValues?.id;
        const handleSubmit = form.handleSubmit((data) => {
          startTransition(async () => {
            if (id) {
              await action({ type: 'update', data, id });
            } else {
              await action({ type: 'create', data });
            }

            onSuccess?.();
          });
        });

        return (
          <Form {...form}>
            <form onSubmit={handleSubmit} className="space-y-8">
              {fields.map((fieldConfig) => {
                return (
                  <FormField
                    key={fieldConfig.name}
                    control={form.control}
                    name={fieldConfig.name}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{fieldConfig.title}</FormLabel>
                        <FormControl>
                          {fieldConfig.type === 'select' && (
                            <Select>
                              <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="..." />
                              </SelectTrigger>
                              <SelectContent>
                                {fieldConfig.options.map((option) => (
                                  <SelectItem
                                    key={option.label}
                                    value={option.value}
                                  >
                                    {option.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          )}
                          {fieldConfig.type === 'text' && (
                            <Input
                              placeholder="..."
                              {...field}
                              value={String(field.value)}
                            />
                          )}
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                );
              })}
              <Button disabled={isLoading} type="submit">
                Submit
              </Button>
            </form>
          </Form>
        );
      };
    }
  );
