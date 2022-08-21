import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-8 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl font-bold tracking-tighter leading-tight text-center mb-4">
            Statically Generated with Next.js.
          </h3>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
