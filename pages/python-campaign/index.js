import Head from "next/head";
import Svg1 from "../../public/1.svg";
import Svg2 from "../../public/2.svg";
import Svg3 from "../../public/3.svg";
import Svg4 from "../../public/4.svg";
import Svg5 from "../../public/v1.svg";
import Svg6 from "../../public/v2.svg";
import Svg7 from "../../public/v3.svg";
import Logo from "../../public/logo.svg";
import { SeoTag } from "../../components/SeoTag";
import { AppBar } from "../../components/AppBar";
import { MyContainer } from "../../components/ui/MyContainer";
import { SectionTitle } from "../../components/ui/SectionTitle";
import { Footer } from "../../components/Footer";

const Hero = () => (
  <div className="bg-[#EAF8F6] py-14">
    <MyContainer>
      <Svg1 className="w-72 sm:w-96 mx-auto" />
      <p className="my-6 px-10 text-cyan-800 font-medium leading-loose tracking-wide md:text-lg">
        東大出身者が教える子ども向けオンラインプログラミングスクール「Schole（スコレ）」
      </p>
      <Logo width={200} className="mx-auto" />
      <div className="flex justify-center my-10">
        <a href="/python-course#contact">
          <span className="bg-cyan-800 text-white text-sm py-4 px-6 rounded-full">
            無料体験のお申し込みはこちら
          </span>
        </a>
      </div>
    </MyContainer>
  </div>
);

const Service = () => (
  <>
    <div id="service" />
    <div className="py-12">
      <MyContainer>
        <p className="text-center text-xl leading-relaxed text-stone-600 my-12">
          本格的なテキストプログラミングを
          <br />
          学んでみませんか？
        </p>
        <img src="/img1.png" className="w-full mx-auto mb-12"/>
        <SectionTitle en="Service" ja="Scholeのサービス内容" />
        <div className="mt-6">
          <Svg2 className="w-48 sm:w-72 py-4 mx-auto" />
          <h4 className="text-center font-medium text-lg my-2">
            本格的なプログラミング
          </h4>
          <div className="px-8 mt-4 mb-12">
            <p>
              Scholeでは、本格的なテキストプログラミング言語「Python*」が学べます。プログラミングが初めてのお子様でも、問題ありません。Pythonを通して、コンピュータサイエンスの広い世界に触れることができます。
            </p>
            <p className="text-xs sm:text-sm mt-2">
              *Pythonは、AI（人工知能）やデータサイエンスなどに使われるプログラミング言語です。情報が必修科目となった高等学校では、授業でPythonを扱うところも増えています。
            </p>
          </div>
        </div>
        <div>
          <Svg3 className="w-48 sm:w-72 py-4 mx-auto" />
          <h4 className="text-center font-medium text-lg my-2">
            東大出身者が教える
          </h4>
          <p className="px-8 mt-4 mb-12">
            テキストプログラミングが教えられる指導者は、あまり多くありません。その中でScholeは、数学的バックグラウンドもある東大理系出身者たちがプログラミングを教えます。
          </p>
        </div>
        <div>
          <Svg4 className="w-48 sm:w-72 py-4 mx-auto" />
          <h4 className="text-center font-medium  text-lg my-2">
            オンラインマンツーマン指導
          </h4>
          <p className="px-8 mt-4 mb-6">
            授業はすべてオンラインで行われるため、送迎のご負担がありません。また、マンツーマン指導のため、お子様の状況や興味に合わせて、授業をカスタマイズすることができます。
          </p>
        </div>
      </MyContainer>
    </div>
  </>
);

const Price = () => (
  <>
    <div id="price" />
    <div className="bg-amber-100/90 pt-10 pb-12">
      <MyContainer>
        <SectionTitle en="Price" ja="料金" />
        <div className="my-10">
          <div className="bg-cyan-800 text-white text-center py-3 rounded-t-lg text-base">
            授業料金
          </div>
          <div className="bg-white rounded-b-lg py-6">
            <div className="mb-4 text-center">
              月額
              <span
                className="text-4xl mx-3 font-medium"
                style={{ fontFamily: "ui-sans-serif, system-ui" }}
              >
                30,000
              </span>
              円（税抜）
            </div>
            <div className="bg-[#E1A4B2] text-white font-medium py-2 my-5 text-center w-72 mx-auto">
              先着10名様まで。無料体験実施中。
            </div>
            <div className="flex justify-center ">
              <ul>
                <li>・1回60分, 月4回</li>
                <li>・教材費は無料です。入会金等もございません。</li>
                <li>・カメラ, マイク付きのPCを1台ご用意下さい。</li>
              </ul>
            </div>
          </div>
        </div>
      </MyContainer>
    </div>
  </>
);

const Event = () => (
  <>
    <div id="event" />
    <div className="bg-[#EAF8F6] pt-10 pb-12">
      <MyContainer>
        <SectionTitle en="Event" ja="イベント" />
        <div className="my-10">
          <p className="px-8 mt-4 mb-6 text-center">
            Scholeはこれまで東京・栃木・岡山など全国各地で体験イベントを実施してきました。
            詳細は以下のリンク先に掲載しておりますので、 ぜひご覧ください。
          </p>
          <a
            href="https://note.com/schole_pg/"
            target="_blank"
            className="bg-amber-500 text-white mx-auto w-52 block text-center p-3 rounded"
          >
            イベント記事はこちら
          </a>
        </div>
      </MyContainer>
    </div>
  </>
);

const Voice = () => (
  <>
    <div id="voice" />
    <div className="py-10">
      <MyContainer>
        <SectionTitle en="Voice" ja="受講者さま・保護者さまの声" />
        <p className="my-8 px-4">
          Scholeは、小学3年生から高校1年生までの幅広い学年のお子様に、本格的なプログラミングを教えています。
        </p>
        <div className="text-xs sm:text-base">
          <div className="px-1 grid grid-cols-4 my-12 items-center">
            <div>
              <Svg5 className="w-16 mx-auto" />
              <div className="text-center my-1 tracking-wider">
                高校1年生
                <br />
                T.Mさん
              </div>
            </div>
            <p className="px-1 col-span-3">
              半年前からプログラミングを始めて、Pythonの文法を一通り終えました。
              高校でも情報の授業が必修になるので、早くから学んでいてちょうど良かったと思っています。
            </p>
          </div>
          <div className="px-1 grid grid-cols-4 items-center">
            <p className="px-1 col-span-3">
              Scratchに最近飽きてきたので、Pythonを始めました。テキスト言語の方ができることが多くて楽しいです。将来はゲームだけでなく、AIを作ってみたいと思っています。
            </p>
            <div>
              <Svg6 className="w-16 mx-auto" />
              <div className="text-center my-1 tracking-wider">
                小学4年生
                <br />
                K.N くん
              </div>
            </div>
          </div>
          <div className="px-1 grid grid-cols-4 my-12 items-center">
            <div>
              <Svg7 className="w-16 mx-auto" />
              <div className="text-center my-1 tracking-wider">
                小学4年生の
                <br />
                保護者さま
              </div>
            </div>
            <p className="px-1 col-span-3">息子がビジュアルプログラミングをある程度学び終えて、この先どうしようか悩んでいました。Pythonは本格的なプログラミング言語で、息子も楽しく学べでいるようなので良かったです。また、送迎も不要なので助かっています。</p>
          </div>
        </div>
      </MyContainer>
    </div>
  </>
);

const Contact = () => (
  <>
    <div id="contact" />
    <div className="bg-[#EAF8F6] py-10">
      <SectionTitle en="Contact" ja="お問い合わせ" />
      <div className="my-6 text-center">
        <MyContainer>
          <a href="https://lin.ee/uPrGK1w" className="underline mx-1 text-cyan-700 text-md">LINE</a>
          または下記のフォームよりお問い合わせください
        </MyContainer>
      </div>
      <div className="googleform-wrapper">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf5388_07qd4OnYCaHx49WWgWI6xgrM8ju9Hel3p-JZXPI33w/viewform?embedded=true">
          読み込んでいます…
        </iframe>
      </div>
    </div>
  </>
);

export default function PythonCourse() {
  return (
    <div>
      <Head>
        <SeoTag />
      </Head>
      <AppBar />
      <main className="text-stone-800 text-sm sm:text-base">
        <Hero />
        <Service />
        <Price />
        <Event />
        <Voice />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
