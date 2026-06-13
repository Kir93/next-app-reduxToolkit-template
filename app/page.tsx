import ButtonSection from './_components/ButtonSection';
import CommonBar from './_components/CommonBar';
import DialogSection from './_components/DialogSection';
import InputSection from './_components/InputSection';
import ReducerButtonSection from './_components/ReducerButtonSection';

export default function Home() {
  return (
    <div className="flex w-full flex-col items-start gap-4">
      <ButtonSection />
      <p className="text-lg">Home Style!</p>
      <CommonBar />
      <ReducerButtonSection />
      <DialogSection />
      <InputSection />
    </div>
  );
}
