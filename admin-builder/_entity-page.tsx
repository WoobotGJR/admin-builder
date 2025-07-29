import { Button } from '@/components/ui/button';
import { AdminClientEntityBuilderContainer } from './_container';
import { EntityCardProvider } from './_entity-card';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { upsertEntityFormProvider } from './_upsert-entity-form';
import { useEffect, useState, useTransition } from 'react';
import { GetEntityResult } from './_types';

export const EntityPageProvider = AdminClientEntityBuilderContainer.provider(
  ({
    deps: {
      config: { fields, name, title },
      action,
    },
    innerDeps: { EntityCard, UpsertEntityForm },
  }) => {
    return function EntityPage() {
      const [entities, setEnities] = useState<GetEntityResult[]>([]);
      const [isLoading] = useTransition();

      useEffect(() => {
        action({ type: 'get' }).then((res) => {
          if (res) setEnities(res);
        });
      }, []);
      return (
        <div>
          <h1>{title}</h1>
          <Dialog>
            <form>
              <DialogTrigger asChild>
                <Button variant={'outline'}>Create</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Create {title}</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when
                    you&apos;re done.
                  </DialogDescription>
                </DialogHeader>
                <UpsertEntityForm onSuccess={() => {}} />
              </DialogContent>
            </form>
          </Dialog>
          <div key={name}>
            {fields.map((field) => (
              <div key={field.name}>
                {field.type}: {field.name}
              </div>
            ))}
            {isLoading && <p>Loading...</p>}
            {entities.map((entity) => (
              <EntityCard key={entity.id} entity={entity} />
            ))}
          </div>
        </div>
      );
    };
  },
  { EntityCard: EntityCardProvider, UpsertEntityForm: upsertEntityFormProvider }
);
