import Image from "next/image";
import MyQuotesSlider from "@/components/Clock";


// function Test() {
//   return <Date/>
// }

export default function Home() {
  return (
    <main>
      <h1>Hello World !</h1>
      <div>
        <MyQuotesSlider/>
      </div>
    </main>
  );
}
