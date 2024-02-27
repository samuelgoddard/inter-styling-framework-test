import CssModulesBanner from "@/src/components/banner/CssModulesBanner.js/CssModulesBanner";
import StyledJsxBanner from "@/src/components/banner/StyledJsxBanner/StyledJsxBanner";
import TailwindBanner from "@/src/components/banner/TailwindBanner/TailwindBanner";
import CssModulesButton from "@/src/components/button/CssModulesButton/CssModulesButton";
import StyledJsxButton from "@/src/components/button/StyledJsxButton/StyledJsxButton";
import TailwindButton from "@/src/components/button/TailwindButton/TailwindButton";

export default function Home() {
  return (
    <main className="p-4 [&>section]:mb-8 [&>section:last-of-type]:mb-0 [&>section]:p-4 [&>section]:border [&>section]:border-black/30 [&>section]:rounded-lg">
      <section className="[&>div]:mb-6 [&>div:last-of-type]:mb-0">
        <h1 className="text-4xl mb-3 font-bold">Buttons</h1>
        {/* Styled JSX */}
        <div>
          <h2 className="mb-3 font-bold text-2xl">Styled JSX</h2>
          <div className="md:flex md:space-x-3">
            <StyledJsxButton intent="primary">
              Primary Button
            </StyledJsxButton>

            <StyledJsxButton intent="primary" invert={true}>
              Inverted Primary Button
            </StyledJsxButton>

            <StyledJsxButton intent="secondary">
              Secondary Button
            </StyledJsxButton>
          </div>
        </div>
        
        {/* Tailwind */}
        <div>
          <h2 className="mb-3 font-bold text-2xl">Tailwind</h2>
          <div className="md:flex md:space-x-3">
            <TailwindButton intent="primary">
              Primary Button
            </TailwindButton>

            <TailwindButton intent="primary" invert={true}>
              Inverted Primary Button
            </TailwindButton>

            <TailwindButton intent="secondary">
              Secondary Button
            </TailwindButton>
          </div>
        </div>

        {/* CSS Modules */}
        <div>
          <h2 className="mb-3 font-bold text-2xl">CSS Modules</h2>
          <div className="md:flex md:space-x-3">
            <CssModulesButton intent="primary">
              Primary Button
            </CssModulesButton>

            <CssModulesButton intent="primary" invert={true}>
              Inverted Primary Button
            </CssModulesButton>

            <CssModulesButton intent="secondary">
              Secondary Button
            </CssModulesButton>
          </div>
        </div>
      </section>


      <section className="[&>div]:mb-6 [&>div:last-of-type]:mb-0">
        <h1 className="text-4xl font-bold mb-3">Banner</h1>
        {/* Styled JSX */}
        <div>
          <h2 className="mb-3 font-bold text-2xl">Styled JSX</h2>
          <StyledJsxBanner heading="Journey into the AI-first future with us" />
        </div>
        
        {/* Tailwind */}
        <div>
          <h2 className="mb-3 font-bold text-2xl">Tailwind</h2>
          <TailwindBanner heading="Journey into the AI-first future with us" />
        </div>

        {/* CSS Modules */}
        <div>
          <h2 className="mb-3 font-bold text-2xl">CSS Modules</h2>
          <CssModulesBanner heading="Journey into the AI-first future with us" />
        </div>
      </section>
    </main>
  )
}
