import CssModulesBanner from "@/src/components/banner/CssModulesBanner.js/CssModulesBanner";
import StyledJsxBanner from "@/src/components/banner/StyledJsxBanner/StyledJsxBanner";
import TailwindBanner from "@/src/components/banner/TailwindBanner/TailwindBanner";
import CssModulesButton from "@/src/components/button/CssModulesButton/CssModulesButton";
import StyledJsxButton from "@/src/components/button/StyledJsxButton/StyledJsxButton";
import TailwindButton from "@/src/components/button/TailwindButton/TailwindButton";
import CssModulesDisplayText from "@/src/components/display-text/CssModulesDisplayText/CssModulesDisplayText";
import StyledJsxDisplayText from "@/src/components/display-text/StyledJsxDisplayText/StyledJsxDisplayText";
import TailwindDisplayText from "@/src/components/display-text/TailwindDisplayText/TailwindDisplayText";

export default function Home() {
  return (
    <main className="p-4 [&>section]:mb-8 [&>section:last-of-type]:mb-0 [&>section]:p-4 [&>section]:border [&>section]:border-black/30 [&>section]:rounded-lg">
      <section className="[&>div]:mb-6 [&>div:last-of-type]:mb-0">
        <span className="flex w-full">
          <h1 className="text-4xl mb-3 font-bold">Buttons</h1>
          <a target="_blank" rel="noreferrer noopener" className="ml-auto underline" href="https://github.com/samuelgoddard/inter-styling-framework-test/blob/main/src/components/button">See Code</a>
        </span>
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
        <span className="flex w-full">
          <h1 className="text-4xl mb-3 font-bold">Display Text</h1>
          <a target="_blank" rel="noreferrer noopener" className="ml-auto underline" href="https://github.com/samuelgoddard/inter-styling-framework-test/blob/main/src/components/display-text">See Code</a>
        </span>
        {/* Styled JSX */}
        <div>
          <h2 className="mb-3 font-bold text-2xl">Styled JSX</h2>
          <div className="block">
            <div>
              <StyledJsxDisplayText size="base">
                Some base sized display text
              </StyledJsxDisplayText>
            </div>
            <div>
              <StyledJsxDisplayText size="md">
                Some md sized display text
              </StyledJsxDisplayText>
            </div>
            <div>
              <StyledJsxDisplayText size="lg">
                Some lg sized display text
              </StyledJsxDisplayText>
            </div>
            <div>
              <StyledJsxDisplayText size="xl">
                Some xl sized display text
              </StyledJsxDisplayText>
            </div>
          </div>
        </div>
        
        {/* Tailwind */}
        <div>
          <h2 className="mb-3 font-bold text-2xl">Tailwind</h2>
          <div className="block">
            <div>
              <TailwindDisplayText size="base">
                Some base sized display text
              </TailwindDisplayText>
            </div>
            <div>
              <TailwindDisplayText size="md">
                Some md sized display text
              </TailwindDisplayText>
            </div>
            <div>
              <TailwindDisplayText size="lg">
                Some lg sized display text
              </TailwindDisplayText>
            </div>
            <div>
              <TailwindDisplayText size="xl">
                Some xl sized display text
              </TailwindDisplayText>
            </div>
          </div>
        </div>

        {/* CSS Modules */}
        <div>
          <h2 className="mb-3 font-bold text-2xl">CSS Modules</h2>
          <div className="block">
            <div>
              <CssModulesDisplayText size="base">
                Some base sized display text
              </CssModulesDisplayText>
            </div>
            <div>
              <CssModulesDisplayText size="md">
                Some md sized display text
              </CssModulesDisplayText>
            </div>
            <div>
              <CssModulesDisplayText size="lg">
                Some lg sized display text
              </CssModulesDisplayText>
            </div>
            <div>
              <CssModulesDisplayText size="xl">
                Some xl sized display text
              </CssModulesDisplayText>
            </div>
          </div>
        </div>
      </section>


      <section className="[&>div]:mb-6 [&>div:last-of-type]:mb-0">
        <span className="flex w-full">
          <h1 className="text-4xl mb-3 font-bold">Banner</h1>
          <a target="_blank" rel="noreferrer noopener" className="ml-auto underline" href="https://github.com/samuelgoddard/inter-styling-framework-test/blob/main/src/components/banner">See Code</a>
        </span>
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
