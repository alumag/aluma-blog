import {
  Header1,
  Header2,
  Header3,
  Header4,
  Header5,
  Header6,
} from "@/typography/header";
import { Paragraph } from "@/typography/paragraph";

export default function Home() {
  return (
    <>
      <Header1 className="pb-2 text-center underline bg-clip-content decoration-[rgb(223,209,224)] hover:bg-[rgb(223,209,224)]">
        אלומה גלברד
      </Header1>
      <blockquote className="mb-2">
        <Paragraph className="italic text-xs sm:text-sm">
          מפתחת תוכנה ביום, ישנה בלילה (ולפעמים גם בצהריים).
        </Paragraph>
      </blockquote>
    </>
  );
}
