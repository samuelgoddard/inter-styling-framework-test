import CssModulesButton from "@/src/components/button/CssModulesButton/CssModulesButton";
import StyledJsxButton from "@/src/components/button/StyledJsxButton/StyledJsxButton";
import TailwindButton from "@/src/components/button/TailwindButton/TailwindButton";

export default function Home() {
  return (
    <main className="p-4">
      {/* Styled JSX */}
      <div className="block mb-6">
        <h2 className="mb-3 font-bold text-2xl">Styled JSX</h2>
        <div className="flex space-x-3">
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
      <div className="block mb-6">
        <h2 className="mb-3 font-bold text-2xl">Tailwind</h2>
        <div className="flex space-x-3">
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
      <div className="block mb-6">
        <h2 className="mb-3 font-bold text-2xl">CSS Modules</h2>
        <div className="flex space-x-3">
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
    </main>
  )
}
