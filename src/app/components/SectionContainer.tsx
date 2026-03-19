type SectionContainerProps = {
  children: React.ReactNode;
};

const SectionContainer = ({ children }: SectionContainerProps) => {
  return <section className="sectionContainer">{children}</section>;
};

export default SectionContainer;