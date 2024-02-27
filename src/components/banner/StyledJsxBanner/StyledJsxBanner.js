import Image from "next/image";
import StyledJsxButton from "@/src/components/button/StyledJsxButton/StyledJsxButton";
import { colors } from '@/styles/design-tokens/styled-jsx-colors'

export default function StyledJsxBanner({ heading }) {
  return (
    <>
      <div className="banner">
        <div className="banner__img">
          <Image
            src={`https://images.ctfassets.net/xny2w179f4ki/3Q3Oe6wapZAsuMHmNxdzdY/087e942f34705a664a9db4e3a0721f1e/landing-banner-background-2.webp?fm=webp`}
            fill
            alt="background"
          />
        </div>
        
        <div className="banner__content">
          <h2 className="banner__heading">{heading}</h2>

          <StyledJsxButton intent="primary">Start a free trial</StyledJsxButton>
        </div>
      </div>
      
      <style jsx>{`
        .banner {
          background-color: ${colors.black};
          padding: 30vw 0;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${colors.white}
        }

        {/* We have to escape to access the third party image component (Asbolutely not hot!!!) */}
        .banner__img :global(img) {
          object-fit: cover;
        }

        .banner__content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          width: 83.333%;
        }

        .banner__heading {
          font-weight: bold;
          font-size: 8vw;
          line-height: 1;
          text-align: center;
          margin-bottom: 20px;
        }

        {/* We can't nest MQ's (Ewwwwww very gross!!) */}
        @media (min-width: 768px) {
          .banner__content {
            width: 58.333%;
          }
          .banner__heading {
            font-size: 6vw;
          }
        }

        @media (min-width: 1024px) {
          .banner__content {
            width: 50%;
          }
          
          .banner__heading {
            font-size: 5vw;
          }
        }

        @media (min-width: 1280px) {
          .banner__content {
            width: 600px;
          }

          .banner__heading {
            font-size: 64px;
          }
        }
      `}</style>
    </>
  )
}