'use client';

import { Dialog } from '@base-ui/react/dialog';
import { X } from 'lucide-react';

import { buttonVariants } from '@components/ui/Button';

export default function DialogSection() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className={buttonVariants({ variant: 'outline' })}>
        Open Dialog
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 bg-black/30" />
        <Dialog.Popup className="fixed top-1/2 left-1/2 w-80 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-lg">
          <div className="flex items-start justify-between gap-4">
            <Dialog.Title className="text-lg font-semibold">Base UI Dialog</Dialog.Title>
            <Dialog.Close
              aria-label="Close dialog"
              className="rounded-md p-1 text-gray-500 hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-primary-900 focus-visible:outline-none"
            >
              <X className="size-4" aria-hidden="true" />
            </Dialog.Close>
          </div>
          <Dialog.Description className="mt-2 text-sm text-gray-600">
            headless Dialog 예시 — Tailwind 클래스로 스타일링됨.
          </Dialog.Description>
          <div className="mt-4 flex justify-end">
            <Dialog.Close className={buttonVariants({ variant: 'primary', size: 'sm' })}>
              확인
            </Dialog.Close>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
