import ButtonSection from './_components/ButtonSection';
import CommonBar from './_components/CommonBar';
import ReducerButtonSection from './_components/ReducerButtonSection';

export default function Home() {
  return (
    <div className="w-full">
      <ButtonSection />
      <p className="text-lg">Home Style!</p>
      <CommonBar />
      <ReducerButtonSection />
    </div>
  );
}
