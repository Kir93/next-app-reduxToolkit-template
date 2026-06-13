'use client';

import { Field } from '@base-ui/react/field';
import { Input } from '@base-ui/react/input';

export default function InputSection() {
  return (
    <Field.Root className="flex w-full max-w-xs flex-col gap-1">
      <Field.Label className="text-sm font-medium">Name</Field.Label>
      <Field.Control
        render={<Input />}
        name="name"
        autoComplete="name"
        placeholder="예: 홍길동"
        className="rounded-md border border-gray-300 px-3 py-2 text-sm focus-visible:border-primary-900 focus-visible:ring-2 focus-visible:ring-primary-900 focus-visible:outline-none"
      />
      <Field.Description className="text-xs text-gray-500">
        Base UI Field + Input 예시
      </Field.Description>
    </Field.Root>
  );
}
